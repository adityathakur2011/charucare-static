import { HeroSection } from "@/components/landing/HeroSection";
import { TrustBar } from "@/components/landing/TrustBar";
import { FeatureGrid } from "@/components/landing/FeatureGrid";
import { DashboardPreview } from "@/components/landing/DashboardPreview";
import { AudienceGrid } from "@/components/landing/AudienceGrid";
import { ProcessSteps } from "@/components/landing/ProcessSteps";
import { RecordHighlight } from "@/components/landing/RecordHighlight";
import { MissionValues } from "@/components/landing/MissionValues";
import { FaqTestimonials } from "@/components/landing/FaqTestimonials";
import { CommunityForm } from "@/components/landing/CommunityForm";
import { FinalCta } from "@/components/landing/FinalCta";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <FeatureGrid />
      <DashboardPreview />
      <AudienceGrid />
      <ProcessSteps />
      <RecordHighlight />
      <MissionValues />
      <FaqTestimonials />
      <CommunityForm />
      <FinalCta />
    </>
  );
}
