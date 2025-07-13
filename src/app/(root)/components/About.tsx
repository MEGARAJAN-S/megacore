import React from 'react'
import { Card, CardContent} from "@/components/ui/card"
import { features } from '@/constants/features'

const About = () => {
    return (
        <div>
            <div className='h-svh bg-black items-center justify-center rounded-t-full border-t-2 border-white'>
                <div className='absolute w-full bg-linear-to-t from-background to-background h-svh z-[-1]'>

                </div>
                <div>
                    <div className='flex items-center justify-center py-50'>
                        <span className='text-2xl sm:text-3xl md:text-4xl lg:text-6xl'>Powerful Features for your Gym Growth</span>
                    </div>
                    <div className='flex items-center justify-around'>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                            {features.map((feature, index) => (
                                <Card
                                    key={index}
                                    className="border-2 hover:border-primary transition-colors duration-300"
                                >
                                    <CardContent className="text-center flex flex-col items-center">
                                        <div className="flex flex-col items-center justify-center">
                                            {/*feature.icon*/}
                                            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                                            <p className="text-muted-foreground">
                                                {feature.desc}
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About