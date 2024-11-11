import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SplitIcon, CalculatorIcon, BellIcon, SmartphoneIcon } from "lucide-react"

export default function PayShareFeatures() {
  const features = [
    {
      icon: <SplitIcon className="h-10 w-10 text-primary" />,
      title: "Easy Bill Splitting",
      description: "Quickly split bills among friends, roommates, or travel companions with just a few taps."
    },
    {
      icon: <CalculatorIcon className="h-10 w-10 text-primary" />,
      title: "Expense Tracking",
      description: "Keep track of shared expenses and individual contributions in real-time."
    },
    {
      icon: <BellIcon className="h-10 w-10 text-primary" />,
      title: "Debt Reminders",
      description: "Send friendly reminders to settle debts and keep everyone on the same page."
    },
    {
      icon: <SmartphoneIcon className="h-10 w-10 text-primary" />,
      title: "Multi-platform Sync",
      description: "Access your shared expenses from any device with seamless cloud synchronization."
    }
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-gray-900 dark:text-gray-100">
          Why Choose PayShare?
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card key={index} className="bg-gray-50 dark:bg-gray-800 border-none shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {feature.icon}
                  <span>{feature.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground dark:text-gray-400">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}