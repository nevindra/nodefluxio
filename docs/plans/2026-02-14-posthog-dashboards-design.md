# PostHog Dashboard Design

**Goal:** Create 3 focused dashboards to understand product-market fit, user journey/UX patterns, and content engagement using the PostHog MCP server.

**Method:** PostHog MCP server to create dashboards and insights programmatically.

**Events available:** 14 custom events + `$pageview` + `$pageleave` + scroll depth (25/50/75/100%) + UTM params.

---

## Dashboard 1: Product Interest & PMF

Answers: *"Which products do users care about, and how well do we convert interest into action?"*

| # | Tile | Insight Type | Definition |
|---|------|-------------|------------|
| 1 | Conversion Funnel | Funnel | `$pageview` → `product_tab_switched` → `product_learn_more_clicked` → `demo_cta_clicked` → `contact_form_started` → `contact_form_submitted` |
| 2 | Product Interest Breakdown | Bar chart | `product_tab_switched` grouped by `product` |
| 3 | Capability Interest | Bar chart | `capability_tab_switched` grouped by `capability` |
| 4 | Lenz Feature Interest | Bar chart | `lenz_feature_toggled` grouped by `feature` |
| 5 | Demo CTAs by Page | Bar chart | `demo_cta_clicked` grouped by `page` |
| 6 | Learn More Clicks | Bar chart | `product_learn_more_clicked` grouped by `product` |
| 7 | Contact Form Funnel | Funnel | `contact_form_started` → `contact_form_submitted` (with `contact_form_error` side metric) |
| 8 | Form Conversion Rate | Trend | `contact_form_submitted` / `contact_form_started` over time |

---

## Dashboard 2: User Journey & UX

Answers: *"How do users navigate the site, where do they engage deeply, and where is there friction?"*

| # | Tile | Insight Type | Definition |
|---|------|-------------|------------|
| 1 | User Paths from Homepage | Paths (Sankey) | Paths starting from `/` — navigation flow from landing |
| 2 | User Paths to Contact | Paths (Sankey) | Paths ending at `/contact-us` — journeys leading to conversion |
| 3 | Top Pages | Table | `$pageview` grouped by `$current_url` |
| 4 | Scroll Depth by Page | Bar chart | `scroll_depth` grouped by `page`, broken down by `depth` |
| 5 | Pages with Deep Engagement | Table | `scroll_depth` filtered to `depth >= 75`, grouped by `page` |
| 6 | Mobile Menu Usage | Trend | `mobile_menu_opened` over time |
| 7 | Contact Info Clicks | Bar chart | `contact_info_clicked` grouped by `type` |
| 8 | Bounce Indicators | Trend | Pageviews without scroll_depth >= 25% |

---

## Dashboard 3: Content & Engagement

Answers: *"Which content resonates, what should I create more of, and how do users interact with content?"*

| # | Tile | Insight Type | Definition |
|---|------|-------------|------------|
| 1 | Most Viewed Pages | Table | `$pageview` grouped by `$current_url`, sorted by count |
| 2 | Blog Category Interest | Bar chart | `blog_category_filtered` grouped by `category` |
| 3 | Blog Post Engagement | Table | `scroll_depth` where `page` contains `/blog/`, grouped by page, filtered `depth >= 50%` |
| 4 | Use Case Carousel Interactions | Trend | `use_case_carousel_interacted` over time |
| 5 | Carousel Direction Breakdown | Bar chart | `use_case_carousel_interacted` grouped by `direction` |
| 6 | Most Viewed Use Case Index | Bar chart | `use_case_carousel_interacted` grouped by `index` |
| 7 | Product Page Engagement | Table | Scroll depth on `/lenz`, `/visionaire`, `/solutions/*` |
| 8 | UTM Source Performance | Bar chart | `$pageview` grouped by `utm_source` |
