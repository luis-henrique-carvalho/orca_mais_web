import { IconTrendingDown, IconTrendingUp } from "@tabler/icons-react"
import StatCard, { StatCardProps } from "./start-card"

const stats: StatCardProps[] = [
  {
    title: "Total Revenue",
    value: "$1,250.00",
    trendIcon: <IconTrendingUp />,
    trendLabel: "+12.5%",
    trendSummary: "Trending up this month",
    trendSummaryIcon: <IconTrendingUp className="size-4" />,
    subtext: "Visitors for the last 6 months",
  },
  {
    title: "New Customers",
    value: "1,234",
    trendIcon: <IconTrendingDown />,
    trendLabel: "-20%",
    trendSummary: "Down 20% this period",
    trendSummaryIcon: <IconTrendingDown className="size-4" />,
    subtext: "Acquisition needs attention",
  },
  {
    title: "Active Accounts",
    value: "45,678",
    trendIcon: <IconTrendingUp />,
    trendLabel: "+12.5%",
    trendSummary: "Strong user retention",
    trendSummaryIcon: <IconTrendingUp className="size-4" />,
    subtext: "Engagement exceed targets",
  },
  {
    title: "Growth Rate",
    value: "4.5%",
    trendIcon: <IconTrendingUp />,
    trendLabel: "+4.5%",
    trendSummary: "Steady performance increase",
    trendSummaryIcon: <IconTrendingUp className="size-4" />,
    subtext: "Meets growth projections",
  },
]

export function SectionCards() {
  return (
    <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
      {stats.map((stat, idx) => (
        <StatCard key={idx} {...stat} />
      ))}
    </div>
  )
}
