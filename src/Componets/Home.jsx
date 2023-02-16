import HomeBanner from './HomeBanner'
import Services from './ChildComponets/homeComponets/Services'
import WhyChooseUs from './ChildComponets/homeComponets/WhyChooseUs'
import CompleteSection from './ChildComponets/homeComponets/CompleteSection'



export default function Home() {
    return (
        <>

            <HomeBanner />
            <Services />
            <WhyChooseUs />
            <CompleteSection />            

        </>
    )
}
