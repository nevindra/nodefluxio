import posthog from "posthog-js";

// --- Conversion Events ---

export function trackDemoCtaClicked(page: string, ctaText: string) {
  posthog.capture("demo_cta_clicked", { page, cta_text: ctaText });
}

export function trackContactFormStarted() {
  posthog.capture("contact_form_started");
}

export function trackContactFormSubmitted() {
  posthog.capture("contact_form_submitted");
}

export function trackContactFormError(error: string) {
  posthog.capture("contact_form_error", { error });
}

// --- Product & Solution Interest ---

export function trackProductTabSwitched(product: string) {
  posthog.capture("product_tab_switched", { product });
}

export function trackCapabilityTabSwitched(capability: string) {
  posthog.capture("capability_tab_switched", { capability });
}

export function trackProductLearnMoreClicked(product: string) {
  posthog.capture("product_learn_more_clicked", { product });
}

export function trackLenzFeatureToggled(feature: string) {
  posthog.capture("lenz_feature_toggled", { feature });
}

// --- Content Engagement ---

export function trackBlogCategoryFiltered(category: string | null) {
  posthog.capture("blog_category_filtered", {
    category: category || "all",
  });
}

export function trackUseCaseCarouselInteracted(
  direction: "left" | "right" | "dot",
  index: number,
) {
  posthog.capture("use_case_carousel_interacted", { direction, index });
}

// --- Navigation & UX ---

export function trackContactInfoClicked(type: "email" | "phone" | "map") {
  posthog.capture("contact_info_clicked", { type });
}

export function trackSocialLinkClicked(platform: string) {
  posthog.capture("social_link_clicked", { platform });
}

export function trackMobileMenuOpened() {
  posthog.capture("mobile_menu_opened");
}

// --- Scroll Depth ---

export function trackScrollDepth(depth: number, page: string) {
  posthog.capture("scroll_depth", { depth, page });
}

// --- UTM Attribution ---

export function captureUtmParams() {
  if (typeof window === "undefined") return;

  const params = new URLSearchParams(window.location.search);
  const utmKeys = [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_term",
    "utm_content",
  ];
  const utmParams: Record<string, string> = {};

  for (const key of utmKeys) {
    const value = params.get(key);
    if (value) {
      utmParams[key] = value;
    }
  }

  if (Object.keys(utmParams).length > 0) {
    posthog.register(utmParams);
  }
}
