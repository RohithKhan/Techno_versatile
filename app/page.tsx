import { SiteHeader } from '@/components/site/site-header';
import { SiteFooter } from '@/components/site/site-footer';
import { Hero } from '@/components/site/sections/hero';
import { PlatformOverview } from '@/components/site/sections/platform-overview';
import { CoreFeatures } from '@/components/site/sections/core-features';
import { WhyChoose } from '@/components/site/sections/why-choose';
import { PlatformStats } from '@/components/site/sections/platform-stats';
import { ArchitectureOverview } from '@/components/site/sections/architecture-overview';
import { SecurityPrivacy } from '@/components/site/sections/security-privacy';
import { Testimonials } from '@/components/site/sections/testimonials';
import { RolePortals } from '@/components/site/sections/role-portals';
import { ContactSection } from '@/components/site/sections/contact';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <PlatformOverview />
        <CoreFeatures />
        <WhyChoose />
        <PlatformStats />
        <ArchitectureOverview />
        <SecurityPrivacy />
        <RolePortals />
        <Testimonials />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
