export interface CaseStudy {
  slug: string;
  number: string;
  title: string;
  tagline: string;
  category: string;
  headline: string;
  editorialSummary: string;
  problemPullQuote: string;
  problemDetails: {
    title: string;
    points: string[];
  }[];
  architectureSummary: string;
  techStack: {
    category: string;
    technologies: string[];
  }[];
  codeSnippet: {
    title: string;
    language: string;
    code: string;
  };
  features: {
    title: string;
    description: string;
    metricsTag?: string;
  }[];
  benchmarks: {
    value: string;
    label: string;
    context: string;
    verified: boolean;
  }[];
  nextProject: {
    title: string;
    slug: string;
    category: string;
  };
}

export const CASE_STUDIES: Record<string, CaseStudy> = {
  'aahar-nearby': {
    slug: 'aahar-nearby',
    number: '01',
    title: 'Aahar Nearby',
    tagline: 'Hyperlocal Food Discovery & Dynamic Menu Intelligence',
    category: 'Mobile Application · Cross-Platform Ecosystem',
    headline: 'Solving the Daily Lunch Dilemma for Office Workforces in Under 30 Seconds',
    editorialSummary:
      'Aahar Nearby is a cross-platform mobile application engineered to bridge the gap between local neighborhood restaurants and hungry office workers. Traditional delivery aggregators burden small eateries with 30%+ commissions and focus on slow dispatch. Aahar Nearby provides a lightweight, real-time discovery engine where local mess and hotel owners publish daily specials in 15 seconds, and nearby professionals discover, filter, and navigate to them instantly.',
    problemPullQuote:
      '"Commercial delivery aggregators impose heavy commission fees on small local eateries and optimize for slow delivery, leaving daily office lunch discovery broken, opaque, and expensive."',
    problemDetails: [
      {
        title: 'For Office Workers & Diners',
        points: [
          'Decision Fatigue: Employees lose 15–20 minutes every lunch hour searching or messaging colleagues.',
          'Dynamic Menus are Opaque: High-quality local eateries rotate breakfast and lunch specials daily with zero digital presence.',
          'Aggregator Markups: Commercial food apps add inflated menu prices and slow wait times for nearby dine-in or takeaway.',
        ],
      },
      {
        title: 'For Local Restaurant Owners',
        points: [
          'Publishing Bottlenecks: Busy morning food prep leaves no time to manage complex e-commerce catalog forms.',
          'Limited Footfall Reach: Owners rely on chalkboards outside their door, missing thousands of office workers in adjacent buildings.',
          'Commission Extraction: Aggregator platforms drain margins without driving local loyalty.',
        ],
      },
    ],
    architectureSummary:
      'Engineered as a 3-sided mobile platform (Diner, Hotel Owner, Platform Admin) utilizing Flutter with Clean Architecture and feature-first modularity. Powered by Google Cloud Firestore with real-time reactive snapshot listeners, Geolocator Haversine distance computations, and OneSignal push notification dispatchers.',
    techStack: [
      { category: 'Client Framework', technologies: ['Flutter 3.x', 'Dart', 'BLoC Pattern'] },
      { category: 'Reactive Backend', technologies: ['Firebase Cloud Firestore', 'Firebase Auth'] },
      { category: 'Spatial & Location', technologies: ['Geolocator API', 'Haversine Calculations'] },
      { category: 'Notifications', technologies: ['OneSignal Flutter SDK', 'Firebase Cloud Messaging'] },
    ],
    codeSnippet: {
      title: 'SPATIAL QUERY & REACTIVE CACHING // FLUTTER BLOC DOMAIN LAYER',
      language: 'dart',
      code: `// Deterministic radius bounding and stream subscription
Stream<List<RestaurantEntity>> watchNearbyOutlets({
  required Coordinate userLocation,
  required double radiusKm,
}) {
  return _firestoreRepository
      .streamActiveMenuSnapshots()
      .map((outlets) => outlets.where((outlet) {
            final distance = Haversine.computeDistance(
              lat1: userLocation.latitude,
              lon1: userLocation.longitude,
              lat2: outlet.coordinate.latitude,
              lon2: outlet.coordinate.longitude,
            );
            return distance <= radiusKm && outlet.hasActiveMenuToday;
          }).toList()
        ..sort((a, b) => a.distance.compareTo(b.distance)));
}`,
    },
    features: [
      {
        title: '30-Second Diner Discovery',
        description:
          'Real-time nearby outlet stream categorized by Breakfast, Lunch, Snacks, and Dinner with live distance tags.',
        metricsTag: 'Sub-Second Local Query',
      },
      {
        title: '15-Second AI Menu Formatter',
        description:
          'Allows hotel owners to paste unformatted raw text or chalkboard notes; system parses items, prices, and categories automatically.',
        metricsTag: 'Rapid Publishing',
      },
      {
        title: 'Multi-Role Route Guarding',
        description:
          'Strict architectural separation isolating Diner views, Owner dashboard controls, and Platform Admin verification tools.',
        metricsTag: 'Zero Privilege Leakage',
      },
      {
        title: 'Faceted Dietary Filtering',
        description:
          'Real-time client-side filter engine for Strict Veg, Non-Veg, Egg, price ceilings, and distance radius (500m, 1km, 3km).',
        metricsTag: 'Deterministic Radius',
      },
    ],
    benchmarks: [
      {
        value: '990+',
        label: 'Automated Tests Passed',
        context: 'Comprehensive Flutter unit, widget, and route guard regression suites',
        verified: true,
      },
      {
        value: 'Sub-Sec',
        label: 'Discovery Querying',
        context: 'Firestore compound spatial queries with local caching',
        verified: true,
      },
      {
        value: 'Multi-Role',
        label: 'Route Guard Isolation',
        context: 'Automated regression verification of Diner, Owner, and Admin roles',
        verified: true,
      },
      {
        value: '< 300ms',
        label: 'GPS Spatial Sync',
        context: 'Haversine distance calculation and deterministic bounding radius',
        verified: false, // Engineering Target / Source Required
      },
    ],
    nextProject: {
      title: 'DateInvite — Playful Interactive Scheduling Engine',
      slug: 'dateinvite',
      category: 'Full-Stack Web Application · High-Touch Interaction',
    },
  },

  dateinvite: {
    slug: 'dateinvite',
    number: '02',
    title: 'DateInvite',
    tagline: 'Playful Interactive Scheduling & Invitation Engine',
    category: 'Full-Stack Web Application · High-Touch Interaction',
    headline: 'Transforming Casual Proposals into Memorable Reciprocal Micro-Apps',
    editorialSummary:
      'DateInvite is a mobile-first web invitation platform engineered to eliminate the social friction and ambiguity of asking someone out. Texting someone lacks intentionality and excitement, while enterprise calendar tools feel sterile and transactional. DateInvite introduces an asymmetric, zero-auth architecture: senders create custom invitation links in 30 seconds without creating an account, and recipients experience an animated, interactive proposal that captures concrete preferences upon acceptance.',
    problemPullQuote:
      '"Asking someone out via plain text messages lacks intentionality and leads to logistical drop-off, while enterprise calendar tools feel transactional, corporate, and awkward."',
    problemDetails: [
      {
        title: 'Casual Texting Ambiguity',
        points: [
          'Logistical Momentum Decay: Even after an initial "yes", endless back-and-forth about day and location causes plans to drop.',
          'Rejection Awkwardness: Direct digital invitations often create high social pressure without playful conversational release.',
          'Lack of Intentionality: Standard chat links fail to signal care, thought, or excitement.',
        ],
      },
      {
        title: 'Platform Churn & Privacy Vulnerabilities',
        points: [
          'Registration Barriers: Legacy RSVP platforms demand email signups, passwords, and app downloads before sending.',
          'Email Scraping Risks: Exposing a sender\'s private email to client-side bundles creates severe harassment and spam vectors.',
          'Sterility of Calendars: Enterprise scheduling links (Calendly) communicate transactional meetings rather than genuine warmth.',
        ],
      },
    ],
    architectureSummary:
      'Built as a high-performance Next.js App Router application with React Server Components, Tailwind CSS, Supabase (PostgreSQL with Row-Level Security), Framer Motion physics, and Resend transactional email dispatch. Senders generate unpredictable cryptographic slugs without credentials, while Supabase RLS guarantees zero PII exposure to public recipient endpoints.',
    techStack: [
      { category: 'Frontend & Runtime', technologies: ['Next.js App Router', 'React', 'TypeScript'] },
      { category: 'Database & Security', technologies: ['Supabase PostgreSQL', 'Row-Level Security (RLS)'] },
      { category: 'Interaction Physics', technologies: ['Framer Motion', 'Spring Dynamics', 'Touch Containment'] },
      { category: 'Transactional Dispatch', technologies: ['Resend API', 'Server Route Handlers', 'Cryptographic Slugs'] },
    ],
    codeSnippet: {
      title: 'SUPABASE ROW-LEVEL SECURITY POLICY // SENDER PRIVACY ISOLATION',
      language: 'sql',
      code: `-- Enforce cryptographic invitation isolation
-- Recipient endpoints can view proposal metadata, but never creator email
CREATE POLICY "invitation_recipient_public_read" 
ON public.invitations
FOR SELECT 
TO anon 
USING (
  slug = current_setting('request.headers', true)::json->>'x-invite-slug' 
  AND status = 'active'
);

-- Creator email is restricted strictly to server-side service roles
REVOKE SELECT (creator_email) ON public.invitations FROM anon, authenticated;`,
    },
    features: [
      {
        title: 'Frictionless 30-Second Link Generation',
        description:
          'Senders generate custom, shareable invitation URLs without creating an account, password, or profile.',
        metricsTag: 'Zero-Auth Entry',
      },
      {
        title: 'Physics-Based Dodge Interaction',
        description:
          'Hovering or tapping the "No" button executes a playful spring-physics evasion vector with viewport containment and accessible skip fallbacks.',
        metricsTag: 'Framer Motion Spring',
      },
      {
        title: '6-Step Reciprocal Questionnaire',
        description:
          'Upon accepting, recipient selects date archetype, atmosphere, dining preferences, and preferred evening slots.',
        metricsTag: 'Concrete Preference Capture',
      },
      {
        title: 'Instant Cryptographic Email Dispatch',
        description:
          'Atomically records recipient selections and triggers a structured email notification to the creator via Resend.',
        metricsTag: 'Transactional Dispatch',
      },
    ],
    benchmarks: [
      {
        value: 'Zero',
        label: 'Cross-User PII Exposure',
        context: 'Audited Supabase Row-Level Security policies with automated verification scripts',
        verified: true,
      },
      {
        value: '100%',
        label: 'Automated Simulation Pass',
        context: 'Full creator-to-recipient reciprocal flow verified across automated test suites',
        verified: true,
      },
      {
        value: 'Zero-Auth',
        label: 'Reciprocal Architecture',
        context: 'Validated operational functionality without demanding account registration',
        verified: true,
      },
      {
        value: '< 420ms',
        label: 'Transactional Delivery',
        context: 'Resend API serverless dispatch latency benchmark',
        verified: false, // Engineering Target / Source Required
      },
    ],
    nextProject: {
      title: 'Aahar Nearby — Hyperlocal Food Discovery',
      slug: 'aahar-nearby',
      category: 'Mobile Application · Cross-Platform Ecosystem',
    },
  },
};
