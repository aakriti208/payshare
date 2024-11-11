import { Button } from "@/components/ui/button"
import Image from "next/image"

export const HeroSection =  ()=>{
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900 dark:to-primary-800">
        <div className="container px-4 md:px-2">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Split Bills, Not Friendships
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl dark:text-gray-400">
                  PayShare makes it easy to split expenses with friends and family. Track shared costs, settle debts, and keep your relationships stress-free.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Get Started for Free
                </Button>
                <Button size="lg" variant="outline" className="bg-background">
                  How It Works
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=400&width=400"
                width={400}
                height={400}
                alt="PayShare App Interface"
                className="w-full aspect-square rounded-xl object-cover border border-gray-200 shadow-lg dark:border-gray-800"
              />
            </div>
          </div>
        </div>
      </section>
    )
}