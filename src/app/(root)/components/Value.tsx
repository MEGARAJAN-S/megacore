import React from 'react'
import { Ripple } from '@/modules/ripple'
import { SparklesText } from '@/modules/sparkle'
import { BookOpen } from 'lucide-react'

const Value = () => {
    return (
        <div className=''>
            <div className='absolute h-svh w-full overflow-hidden'>
                <Ripple mainCircleSize={400} />
            </div>
            <div className='pt-20'>
                <div className='flex items-center justify-center'>
                    <div className='flex flex-col items-center justify-center text-2xl sm:text-3xl md:text-5xl lg-text-7xl'>
                        <h1>WHY</h1>
                        <h1><SparklesText>MEGACORE</SparklesText></h1>
                    </div>
                </div>
                <div>
                    <div className='flex flex-col items-center text-2xl py-10'>
                        <span>MegaCore is your all-in-one gym management solution built for simplicity, speed, and scale</span>
                        <span>From memberships to payments and performance tracking, we streamline every aspect of your fitness business—so you can focus on growth</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Value