import {raleway} from "@/app/fonts/fonts";

export const dynamic = 'force-dynamic'

import Hero from "@/pages-comp/achievements/hero"
import Info from "@/pages-comp/achievements/info"
import OurMotto from "@/pages-comp/achievements/ourMotto"

const Achievements = () => {
    return (
        <div className={raleway.className}>
            <Hero/>
            <OurMotto/>
            <Info/>
        </div>
    )
}

export default Achievements