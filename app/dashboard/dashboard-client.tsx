'use client'

import { useQuery } from "@tanstack/react-query"
import { Sidebar } from "@/components/layout/sidebar"
import { Header } from "@/components/layout/header"
import { MobileNav } from "@/components/layout/mobile-nav"
import { ActivityCard } from "@/components/dashboard/activity-card"
import { BalanceCard } from "@/components/dashboard/balance-card"
import { EarningsCard } from "@/components/dashboard/earnings-card"
import { ProfileCard } from "@/components/dashboard/profile-card"
import { TransfersCard } from "@/components/dashboard/transfers-card"
import { SecurityCard } from "@/components/dashboard/security-card"
import { UpcomingLessonsCard } from "@/components/dashboard/upcoming-lessons-card"
import { ClassPerformanceCard } from "@/components/dashboard/class-performance-card"
import { QuickActionsCard } from "@/components/dashboard/quick-actions-card"
import { CreateClassCard } from "@/components/dashboard/create-class-card"
import { useIsMobile } from "@/hooks/use-mobile"
import type { Teacher, Transfer, Activity } from "@/types/schema"

export function DashboardClient() {
  const isMobile = useIsMobile()
  
  const { data: teacher, isLoading: teacherLoading } = useQuery<Teacher>({
    queryKey: ["/api/teacher"],
    queryFn: async () => {
      const response = await fetch("/api/teacher")
      if (!response.ok) throw new Error("Failed to fetch teacher")
      return response.json()
    },
  })

  const { data: transfers, isLoading: transfersLoading } = useQuery<Transfer[]>({
    queryKey: ["/api/teacher", 1, "transfers"],
    queryFn: async () => {
      const response = await fetch("/api/teacher/1/transfers")
      if (!response.ok) throw new Error("Failed to fetch transfers")
      return response.json()
    },
    enabled: !!teacher,
  })

  const { data: activities, isLoading: activitiesLoading } = useQuery<Activity[]>({
    queryKey: ["/api/teacher", 1, "activities"],
    queryFn: async () => {
      const response = await fetch("/api/teacher/1/activities")
      if (!response.ok) throw new Error("Failed to fetch activities")
      return response.json()
    },
    enabled: !!teacher,
  })

  if (teacherLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sage-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    )
  }

  if (!teacher) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600">Teacher not found</p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex h-screen overflow-hidden" style={{ backgroundColor: '#D7D7D5' }}>
      {!isMobile && <Sidebar />}
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header teacher={teacher} />
        
        <main className="flex-1 overflow-y-auto p-4 md:p-8 pb-20 md:pb-8 md:pl-32">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {/* First Row - New Cards */}
            <UpcomingLessonsCard />
            <ClassPerformanceCard />
            <QuickActionsCard />
            
            {/* Activity Card */}
            <ActivityCard 
              amount={teacher.activityAmount} 
              activities={activities || []} 
              isLoading={activitiesLoading}
            />
            
            {/* Balance Card */}
            <BalanceCard 
              className="md:col-span-2"
              activities={activities || []} 
              isLoading={activitiesLoading}
            />
            
            {/* Earnings Card */}
            <EarningsCard 
              totalEarnings={teacher.earnings}
              profitPercentage="34"
            />
            
            {/* Profile Card */}
            <ProfileCard teacher={teacher} />
            
            {/* Transfers Card */}
            <TransfersCard 
              transfers={transfers || []} 
              isLoading={transfersLoading}
              className="md:col-span-2"
            />
            
            {/* Security Card */}
            <SecurityCard />
            
            {/* Create Class Card */}
            <CreateClassCard />
          </div>
        </main>
      </div>
      
      {isMobile && <MobileNav />}
    </div>
  )
}