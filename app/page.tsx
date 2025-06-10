import { DashboardLayout } from "@/components/dashboard-layout"
import { QuotationGrid } from "@/components/quotation-grid"
import { StatsCards } from "@/components/stats-cards"
import { QuickActions } from "@/components/quick-actions"

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-[#00D4FF] to-[#00FF88] bg-clip-text text-transparent">
              Dashboard
            </h1>
            <p className="text-muted-foreground mt-2">Manage your construction quotations with precision</p>
          </div>
          <QuickActions />
        </div>

        <StatsCards />
        <QuotationGrid />
      </div>
    </DashboardLayout>
  )
}
