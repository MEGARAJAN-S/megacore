import React from 'react'
import { Card, CardContent} from "@/components/ui/card"
import { features } from '@/constants/features'

const About = () => {
    return (
        <div>
            <div className='w-full h-[50rem] pt-20'>
                <div className='w-full h-[30rem] bg-black'>
                    <div className='flex items-center justify-around pt-20'>
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