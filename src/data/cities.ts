export interface Faq { q: string; a: string }
export interface Step { title: string; text: string }
export interface Scenario { title: string; intro: string; items: string[]; outro: string }
export interface City {
  slug: string;
  name: string;
  state: string;
  stateName: string;
  county: string;
  formName: string;
  title: string;
  description: string;
  h1Bottom: string;
  hero: string;
  localNoteTitle: string;
  localNote: string;
  whyHeading: string;
  why: string[];
  steps: Step[];
  faqs: Faq[];
  nearby: string[];
  summaryFees?: boolean;
  summarySteps?: boolean;
  scenario?: Scenario;
  blurb: string;
}

export const brand = "DFW Wholesale Double Close";
export const domain = "dfw.wholesaledoubleclose.click";

export const trustBar: string[] = [
  "Transactional funding up to {{fundingMax}}",
  "Fees start at {{tier1Rate}}",
  "Funding in as little as 24 hours",
  "Built for DFW wholesalers"
];

const FORM = "DFW-Wholesale-Double-Close-Form";

const rawCities: City[] = [
  {
    slug: "dallas",
    name: "Dallas",
    state: "TX",
    stateName: "Texas",
    county: "Dallas County",
    formName: FORM,
    title: "Double Close Funding in Dallas, TX | Transactional Funding for Wholesalers",
    description: "Transactional double close funding for Dallas wholesalers. Oak Cliff cottages to Lake Highlands ranch homes. Fees from {{tier1Rate}}.",
    h1Bottom: "in Dallas, Texas",
    hero: "Dallas is the anchor of the metro's investor market, and its housing stock gives wholesalers a deep bench. Oak Cliff and Kessler Park hold 1920s through 1950s pier and beam cottages, Casa Linda and Lake Highlands add postwar ranch homes, and Pleasant Grove and southeast Dallas offer some of the lowest entry prices inside the loop. Renovated homes resell to buyers priced out of the Park Cities and the northern suburbs. DFW Wholesale Double Close connects you with transactional funding for deals anywhere in the city. You take title with the funder's money, resell to your end buyer the same day, and your markup stays off a single assignment contract. Submit your Dallas deal through the form and funding can be ready in as little as 24 hours.",
    localNoteTitle: "How double closings work in Dallas",
    localNote: "Texas closings typically run through a title company, and most investor files close with the title company the end buyer already uses. Texas charges no state transfer tax, and title insurance premium rates are set at the state level, so the premium itself does not change between title companies while other fees vary by office. Deeds record with the Dallas County clerk, and older pier and beam homes usually bring foundation questions into the buyer's inspection. The title company can confirm anything property specific on your file.",
    whyHeading: "Why Dallas wholesalers use us",
    why: [
      "Dallas deal flow runs on volume and variety at the same time. A Kessler Park cottage, a Casa Linda ranch and a Pleasant Grove starter all have different buyers and different timelines. A double closing lets you move between them without changing process or tying up your own money.",
      "We connect you with transactional funding for the purchase side of your deal so you can take title and resell the same day. Your seller sees a clean cash purchase, your buyer sees a normal sale, and your wholesale spread stays between the two closing statements instead of on an assignment contract.",
      "The fee schedule is published on this page and stays flat across every city and county in the metro. You can underwrite the funding cost into your offer before you tie up the property, and there are no surprise charges at the closing table."
    ],
    steps: [
      { title: "Submit your deal", text: "Send the property address, your contract price, the resale price, and the title company handling the file. Oak Cliff cottages and Lake Highlands ranch homes both fit the same form." },
      { title: "We review the numbers", text: "The purchase, the resale, and the paperwork get reviewed with the title company. Questions get answered before closing day, not at the table." },
      { title: "Funding closes your purchase", text: "On closing day the funds for your purchase side are wired. Your resale closes right after, the funds and fee come out of the proceeds, and the spread is yours." }
    ],
    faqs: [
      { q: "Do you fund double closings in Dallas?", a: "Yes. Deals across the city fit, from Oak Cliff and Kessler Park to Casa Linda, Lake Highlands and Pleasant Grove. Cottages, ranch homes and brick two stories all work when the numbers do." },
      { q: "What kinds of Dallas properties work for a double closing?", a: "Most Dallas wholesale deals are 1920s through 1970s single family homes with dated interiors or deferred maintenance. End buyers range from renovators reselling to move up buyers to landlords holding rentals in the southern neighborhoods." },
      { q: "What is a double closing?", a: "A double closing is two back to back transactions on the same property on the same day. You buy the home from the seller, take title, and immediately resell it to your end buyer. Because you take title in between, your purchase price and your resale price stay on separate closing statements instead of one assignment contract." },
      { q: "How fast can funding be ready?", a: "Funding can be ready in as little as 24 hours once we have the deal details and the title company information. Files with complete paperwork move fastest, so send everything you have when you submit the form." },
      { q: "What does double close funding cost?", a: "Fees follow the schedule on this page: {{tier1Rate}} on deals up to {{tier1Cap}} with a {{tier1Minimum}} minimum, {{tier2Rate}} from {{tier1Cap}} to {{tier2Cap}}, and {{tier3Rate}} from {{tier2Cap}} to {{fundingMax}}. Extra days, a second closing company, or special paperwork carry the additional fees listed in the schedule." },
      { q: "Can you fund EMD or a Morby Method deal?", a: "Yes. Earnest money deposits and Morby Method structures are part of what we fund. Morby Method fees are paid upfront by Zelle or wire, as listed in the fee schedule above." }
    ],
    nearby: ["irving", "garland", "desoto"],
    summaryFees: true,
    summarySteps: true,
    scenario: {
      title: "Example: how an Oak Cliff deal can play out",
      intro: "This is an illustrative example, not a real transaction or a promise of results. It shows the moving parts of a typical Dallas double closing so you can see where each piece fits.",
      items: [
        "You sign a purchase contract on a 1940s pier and beam cottage near the Bishop Arts District at $265,000 with a 21 day closing window.",
        "Your end buyer, a rehabber who works the Oak Cliff neighborhoods, commits at $335,000 through the same title company.",
        "The title company schedules both files back to back. Transactional funding covers your $265,000 purchase side, so none of your own cash goes into the deal. Title insurance, escrow fees and Dallas County recording fees appear as their own line items on each side of the file.",
        "Your resale closes right after your purchase. The funding and the {{tier1Rate}} fee from the published schedule come out of the resale proceeds, and the remaining spread is your margin."
      ],
      outro: "The full sequence and the paperwork behind it are covered in how double closing works in Texas, and the fee math is laid out on the transactional funding fees page."
    },
    blurb: "The anchor of the metro's investor market. Oak Cliff cottages, Casa Linda and Lake Highlands ranch homes, and low entry prices in the southern neighborhoods."
  },
  {
    slug: "garland",
    name: "Garland",
    state: "TX",
    stateName: "Texas",
    county: "Dallas County",
    formName: FORM,
    title: "Double Close Funding in Garland, TX | Transactional Funding",
    description: "Double close funding for Garland, TX wholesalers. Postwar ranch homes from Duck Creek to Firewheel. Fees from {{tier1Rate}}.",
    h1Bottom: "in Garland, Texas",
    hero: "Garland was one of the metro's first big postwar suburbs, and that history is the opportunity. Neighborhoods like Duck Creek, Oakridge and Spring Park are full of 1950s through 1980s ranch homes with solid bones and dated interiors, exactly the profile renovators chase for resale to first time buyers priced out of Dallas. Newer sections near Firewheel pull a different buyer pool at higher price points. DFW Wholesale Double Close connects you with transactional funding for Garland deals. You take title with the funder's money, resell to your end buyer the same day, and your spread stays off a single assignment contract. Submit your Garland deal through the form and funding can be ready in as little as 24 hours.",
    localNoteTitle: "How double closings work in Garland",
    localNote: "Texas closings typically run through a title company, and most investor files close with the title company the end buyer already uses. Texas charges no state transfer tax, and title insurance premium rates are set at the state level, so the premium itself does not change between title companies while other fees vary by office. Most Garland homes sit on slabs poured decades ago, so foundation movement comes up often in buyer inspections. Deeds record with the Dallas County clerk. The title company can confirm anything property specific.",
    whyHeading: "Why Garland wholesalers use us",
    why: [
      "Garland's ranch neighborhoods give wholesalers repeat business: the same floor plans turn over again and again, and rehab buyers know their numbers on them before they walk in. A double closing lets you keep pace with that buyer pool without your own cash in escrow.",
      "We connect you with transactional funding for the purchase side of your deal so you can take title and resell the same day. Your seller sees a clean cash purchase, your buyer sees a normal sale, and your wholesale spread stays between the two closing statements instead of on an assignment contract.",
      "The fee schedule is published on this page and stays flat across every city and county in the metro. You can underwrite the funding cost into your offer before you tie up the property, and there are no surprise charges at the closing table."
    ],
    steps: [
      { title: "Submit your deal", text: "Send the property address, your contract price, the resale price, and the title company handling the file. Duck Creek ranch homes and Firewheel two stories both fit the same form." },
      { title: "We review the numbers", text: "The purchase, the resale, and the paperwork get reviewed with the title company. Questions get answered before closing day, not at the table." },
      { title: "Funding closes your purchase", text: "On closing day the funds for your purchase side are wired. Your resale closes right after, the funds and fee come out of the proceeds, and the spread is yours." }
    ],
    faqs: [
      { q: "Do you fund double closings in Garland?", a: "Yes. Deals across Garland fit, from the postwar ranch neighborhoods around Duck Creek and Oakridge to the newer sections near Firewheel. Single family homes and townhouses both work when the numbers do." },
      { q: "What kinds of Garland properties work for a double closing?", a: "Most Garland wholesale deals are 1950s through 1980s ranch homes with dated kitchens and original systems. End buyers renovate them for first time buyers and families moving up from Dallas, so resales move steadily." },
      { q: "What is a double closing?", a: "A double closing is two back to back transactions on the same property on the same day. You buy the home from the seller, take title, and immediately resell it to your end buyer. Because you take title in between, your purchase price and your resale price stay on separate closing statements instead of one assignment contract." },
      { q: "How fast can funding be ready?", a: "Funding can be ready in as little as 24 hours once we have the deal details and the title company information. Files with complete paperwork move fastest, so send everything you have when you submit the form." },
      { q: "What does double close funding cost?", a: "Fees follow the schedule on this page: {{tier1Rate}} on deals up to {{tier1Cap}} with a {{tier1Minimum}} minimum, {{tier2Rate}} from {{tier1Cap}} to {{tier2Cap}}, and {{tier3Rate}} from {{tier2Cap}} to {{fundingMax}}. Extra days, a second closing company, or special paperwork carry the additional fees listed in the schedule." },
      { q: "Can you fund EMD or a Morby Method deal?", a: "Yes. Earnest money deposits and Morby Method structures are part of what we fund. Morby Method fees are paid upfront by Zelle or wire, as listed in the fee schedule above." }
    ],
    nearby: ["richardson", "rowlett", "mesquite"],
    blurb: "One of the metro's first postwar suburbs. Ranch homes with solid bones from Duck Creek to Firewheel, chased by renovators."
  },
  {
    slug: "irving",
    name: "Irving",
    state: "TX",
    stateName: "Texas",
    county: "Dallas County",
    formName: FORM,
    title: "Double Close Funding in Irving, TX | Transactional Funding",
    description: "Double close funding for Irving, TX wholesalers. Older south Irving homes to Valley Ranch and Las Colinas. Fees from {{tier1Rate}}.",
    h1Bottom: "in Irving, Texas",
    hero: "Irving gives wholesalers two markets in one city. South Irving and the streets around the Heritage District hold 1940s through 1960s homes at some of the lowest entry prices in the county, while Valley Ranch and the neighborhoods near Las Colinas trade at higher price points for move up buyers working along the corridor. The airport and the jobs clustered around it keep both renter and buyer demand steady. DFW Wholesale Double Close connects you with transactional funding for Irving deals. You take title with the funder's money, resell to your end buyer the same day, and your markup stays off a single assignment contract. Submit your Irving deal through the form and funding can be ready in as little as 24 hours.",
    localNoteTitle: "How double closings work in Irving",
    localNote: "Texas closings typically run through a title company, and most investor files close with the title company the end buyer already uses. Texas charges no state transfer tax, and title insurance premium rates are set at the state level, so the premium itself does not change between title companies while other fees vary by office. Irving's older southern neighborhoods often involve estate and long-held family properties, so files can carry probate paperwork. Deeds record with the Dallas County clerk. The title company can confirm anything property specific.",
    whyHeading: "Why Irving wholesalers use us",
    why: [
      "Irving's spread of price points means your end buyers range from landlords holding south Irving rentals to renovators reselling near Las Colinas. A double closing works the same way on both, so one process covers the whole city.",
      "We connect you with transactional funding for the purchase side of your deal so you can take title and resell the same day. Your seller sees a clean cash purchase, your buyer sees a normal sale, and your wholesale spread stays between the two closing statements instead of on an assignment contract.",
      "The fee schedule is published on this page and stays flat across every city and county in the metro. You can underwrite the funding cost into your offer before you tie up the property, and there are no surprise charges at the closing table."
    ],
    steps: [
      { title: "Submit your deal", text: "Send the property address, your contract price, the resale price, and the title company handling the file. South Irving cottages and Valley Ranch two stories both fit the same form." },
      { title: "We review the numbers", text: "The purchase, the resale, and the paperwork get reviewed with the title company. Questions get answered before closing day, not at the table." },
      { title: "Funding closes your purchase", text: "On closing day the funds for your purchase side are wired. Your resale closes right after, the funds and fee come out of the proceeds, and the spread is yours." }
    ],
    faqs: [
      { q: "Do you fund double closings in Irving?", a: "Yes. Deals across Irving fit, from the older neighborhoods south of the airport corridor to Valley Ranch and the streets near Las Colinas. Single family homes and townhouses both work when the numbers do." },
      { q: "What kinds of Irving properties work for a double closing?", a: "Most Irving wholesale deals are 1940s through 1970s homes in the southern half of the city, many of them long-held family or estate properties. End buyers include landlords building rental portfolios and renovators reselling to commuters." },
      { q: "What is a double closing?", a: "A double closing is two back to back transactions on the same property on the same day. You buy the home from the seller, take title, and immediately resell it to your end buyer. Because you take title in between, your purchase price and your resale price stay on separate closing statements instead of one assignment contract." },
      { q: "How fast can funding be ready?", a: "Funding can be ready in as little as 24 hours once we have the deal details and the title company information. Files with complete paperwork move fastest, so send everything you have when you submit the form." },
      { q: "What does double close funding cost?", a: "Fees follow the schedule on this page: {{tier1Rate}} on deals up to {{tier1Cap}} with a {{tier1Minimum}} minimum, {{tier2Rate}} from {{tier1Cap}} to {{tier2Cap}}, and {{tier3Rate}} from {{tier2Cap}} to {{fundingMax}}. Extra days, a second closing company, or special paperwork carry the additional fees listed in the schedule." },
      { q: "Can you fund EMD or a Morby Method deal?", a: "Yes. Earnest money deposits and Morby Method structures are part of what we fund. Morby Method fees are paid upfront by Zelle or wire, as listed in the fee schedule above." }
    ],
    nearby: ["coppell", "farmers-branch", "grand-prairie"],
    blurb: "Two markets in one city. Low entry prices in south Irving, move up buyers near Las Colinas and Valley Ranch."
  },
  {
    slug: "grand-prairie",
    name: "Grand Prairie",
    state: "TX",
    stateName: "Texas",
    county: "Dallas County",
    formName: FORM,
    title: "Double Close Funding in Grand Prairie, TX | Transactional Funding",
    description: "Double close funding for Grand Prairie, TX wholesalers. Mid-century homes along I-30 between Dallas and Fort Worth. Fees from {{tier1Rate}}.",
    h1Bottom: "in Grand Prairie, Texas",
    hero: "Grand Prairie sits on I-30 halfway between the two downtowns, and that in between position defines its market. The city is full of 1950s through 1970s homes that draw both renovators and rental investors, with newer sections near Joe Pool Lake pulling move up buyers at higher price points. Commuters can reach Dallas, Fort Worth and the Arlington job centers from the same driveway, which keeps resale demand broad. DFW Wholesale Double Close connects you with transactional funding for Grand Prairie deals. You take title with the funder's money, resell to your end buyer the same day, and your spread stays off a single assignment contract. Submit your Grand Prairie deal through the form and funding can be ready in as little as 24 hours.",
    localNoteTitle: "How double closings work in Grand Prairie",
    localNote: "Texas closings typically run through a title company, and most investor files close with the title company the end buyer already uses. Texas charges no state transfer tax, and title insurance premium rates are set at the state level, so the premium itself does not change between title companies while other fees vary by office. Grand Prairie spans Dallas, Tarrant and Ellis counties, so the deed records with the county clerk where the property actually sits. The title company can confirm the county and anything else property specific.",
    whyHeading: "Why Grand Prairie wholesalers use us",
    why: [
      "Grand Prairie's mid-century housing stock keeps deal flow steady in both directions: investors flip the older homes to first time buyers and hold others as rentals for the I-30 corridor workforce. A double closing lets you work both exit paths without your own capital in the middle.",
      "We connect you with transactional funding for the purchase side of your deal so you can take title and resell the same day. Your seller sees a clean cash purchase, your buyer sees a normal sale, and your wholesale spread stays between the two closing statements instead of on an assignment contract.",
      "The fee schedule is published on this page and stays flat across every city and county in the metro. You can underwrite the funding cost into your offer before you tie up the property, and there are no surprise charges at the closing table."
    ],
    steps: [
      { title: "Submit your deal", text: "Send the property address, your contract price, the resale price, and the title company handling the file. Mid-century homes near I-30 and newer builds by Joe Pool Lake both fit the same form." },
      { title: "We review the numbers", text: "The purchase, the resale, and the paperwork get reviewed with the title company. Questions get answered before closing day, not at the table." },
      { title: "Funding closes your purchase", text: "On closing day the funds for your purchase side are wired. Your resale closes right after, the funds and fee come out of the proceeds, and the spread is yours." }
    ],
    faqs: [
      { q: "Do you fund double closings in Grand Prairie?", a: "Yes. Deals across Grand Prairie fit, from the 1950s through 1970s neighborhoods along I-30 to the newer sections near Joe Pool Lake and Mountain Creek. Single family homes and townhouses both work when the numbers do." },
      { q: "What kinds of Grand Prairie properties work for a double closing?", a: "Most Grand Prairie wholesale deals are mid-century single family homes with dated interiors. End buyers renovate them for first time buyers or hold them as rentals for commuters working in either downtown." },
      { q: "What is a double closing?", a: "A double closing is two back to back transactions on the same property on the same day. You buy the home from the seller, take title, and immediately resell it to your end buyer. Because you take title in between, your purchase price and your resale price stay on separate closing statements instead of one assignment contract." },
      { q: "How fast can funding be ready?", a: "Funding can be ready in as little as 24 hours once we have the deal details and the title company information. Files with complete paperwork move fastest, so send everything you have when you submit the form." },
      { q: "What does double close funding cost?", a: "Fees follow the schedule on this page: {{tier1Rate}} on deals up to {{tier1Cap}} with a {{tier1Minimum}} minimum, {{tier2Rate}} from {{tier1Cap}} to {{tier2Cap}}, and {{tier3Rate}} from {{tier2Cap}} to {{fundingMax}}. Extra days, a second closing company, or special paperwork carry the additional fees listed in the schedule." },
      { q: "Can you fund EMD or a Morby Method deal?", a: "Yes. Earnest money deposits and Morby Method structures are part of what we fund. Morby Method fees are paid upfront by Zelle or wire, as listed in the fee schedule above." }
    ],
    nearby: ["arlington", "irving", "cedar-hill"],
    blurb: "Halfway between the two downtowns on I-30. Mid-century homes drawing both renovators and rental investors."
  },
  {
    slug: "mesquite",
    name: "Mesquite",
    state: "TX",
    stateName: "Texas",
    county: "Dallas County",
    formName: FORM,
    title: "Double Close Funding in Mesquite, TX | Transactional Funding",
    description: "Double close funding for Mesquite, TX wholesalers. Postwar ranch homes east of Dallas along I-635 and I-30. Fees from {{tier1Rate}}.",
    h1Bottom: "in Mesquite, Texas",
    hero: "Mesquite anchors the east side of the county, where I-635 meets I-30. Its neighborhoods are packed with 1950s through 1970s ranch homes, many still with original kitchens and systems, and renovated examples resell quickly to first time buyers and young families commuting into Dallas. Entry prices sit well below the northern suburbs, which leaves room for a wholesale spread on the right contract. DFW Wholesale Double Close connects you with transactional funding for Mesquite deals. You take title with the funder's money, resell to your end buyer the same day, and your markup stays off a single assignment contract. Submit your Mesquite deal through the form and funding can be ready in as little as 24 hours.",
    localNoteTitle: "How double closings work in Mesquite",
    localNote: "Texas closings typically run through a title company, and most investor files close with the title company the end buyer already uses. Texas charges no state transfer tax, and title insurance premium rates are set at the state level, so the premium itself does not change between title companies while other fees vary by office. Mesquite's postwar slabs mean foundation and sewer line questions come up often in buyer inspections. Deeds record with the Dallas County clerk. The title company can confirm anything property specific.",
    whyHeading: "Why Mesquite wholesalers use us",
    why: [
      "Mesquite is a volume market. The same ranch floor plans trade constantly, and rehab buyers underwrite them fast because they have renovated dozens just like them. A double closing keeps your side of the deal just as fast, with no personal cash tied up between contracts.",
      "We connect you with transactional funding for the purchase side of your deal so you can take title and resell the same day. Your seller sees a clean cash purchase, your buyer sees a normal sale, and your wholesale spread stays between the two closing statements instead of on an assignment contract.",
      "The fee schedule is published on this page and stays flat across every city and county in the metro. You can underwrite the funding cost into your offer before you tie up the property, and there are no surprise charges at the closing table."
    ],
    steps: [
      { title: "Submit your deal", text: "Send the property address, your contract price, the resale price, and the title company handling the file. Ranch homes near Town East and the I-30 corridor both fit the same form." },
      { title: "We review the numbers", text: "The purchase, the resale, and the paperwork get reviewed with the title company. Questions get answered before closing day, not at the table." },
      { title: "Funding closes your purchase", text: "On closing day the funds for your purchase side are wired. Your resale closes right after, the funds and fee come out of the proceeds, and the spread is yours." }
    ],
    faqs: [
      { q: "Do you fund double closings in Mesquite?", a: "Yes. Deals across Mesquite fit, from the neighborhoods around Town East to the streets along I-30 and I-635. Single family homes and townhouses both work when the numbers do." },
      { q: "What kinds of Mesquite properties work for a double closing?", a: "Most Mesquite wholesale deals are 1950s through 1970s ranch homes with original interiors. End buyers renovate them for first time buyers commuting into Dallas, and the same floor plans resell again and again." },
      { q: "What is a double closing?", a: "A double closing is two back to back transactions on the same property on the same day. You buy the home from the seller, take title, and immediately resell it to your end buyer. Because you take title in between, your purchase price and your resale price stay on separate closing statements instead of one assignment contract." },
      { q: "How fast can funding be ready?", a: "Funding can be ready in as little as 24 hours once we have the deal details and the title company information. Files with complete paperwork move fastest, so send everything you have when you submit the form." },
      { q: "What does double close funding cost?", a: "Fees follow the schedule on this page: {{tier1Rate}} on deals up to {{tier1Cap}} with a {{tier1Minimum}} minimum, {{tier2Rate}} from {{tier1Cap}} to {{tier2Cap}}, and {{tier3Rate}} from {{tier2Cap}} to {{fundingMax}}. Extra days, a second closing company, or special paperwork carry the additional fees listed in the schedule." },
      { q: "Can you fund EMD or a Morby Method deal?", a: "Yes. Earnest money deposits and Morby Method structures are part of what we fund. Morby Method fees are paid upfront by Zelle or wire, as listed in the fee schedule above." }
    ],
    nearby: ["garland", "rowlett", "dallas"],
    blurb: "The east side's volume market. Postwar ranch homes that rehab buyers underwrite on repeat."
  },
  {
    slug: "carrollton",
    name: "Carrollton",
    state: "TX",
    stateName: "Texas",
    county: "Dallas County",
    formName: FORM,
    title: "Double Close Funding in Carrollton, TX | Transactional Funding",
    description: "Double close funding for Carrollton, TX wholesalers. 1960s through 1980s subdivisions along I-35E. Fees from {{tier1Rate}}.",
    h1Bottom: "in Carrollton, Texas",
    hero: "Carrollton grew up along I-35E in the 1960s through 1980s, and its subdivisions are now classic renovation territory. Brick ranch homes and two stories with dated interiors draw rehab buyers who resell to families chasing the schools and the central location between the George Bush Turnpike and the corridor's job centers. The historic downtown square and the Koreatown corridor along Old Denton Road give the city distinct pockets that pull different buyers. DFW Wholesale Double Close connects you with transactional funding for Carrollton deals. You take title with the funder's money, resell to your end buyer the same day, and your spread stays off a single assignment contract. Submit your Carrollton deal through the form and funding can be ready in as little as 24 hours.",
    localNoteTitle: "How double closings work in Carrollton",
    localNote: "Texas closings typically run through a title company, and most investor files close with the title company the end buyer already uses. Texas charges no state transfer tax, and title insurance premium rates are set at the state level, so the premium itself does not change between title companies while other fees vary by office. Carrollton spans Dallas, Denton and Collin counties, so the deed records with the county clerk where the property actually sits. The title company can confirm the county and anything else property specific.",
    whyHeading: "Why Carrollton wholesalers use us",
    why: [
      "Carrollton's subdivisions were built in waves, so a renovator can price a 1970s ranch here almost by memory. That kind of predictable resale market is exactly where a double closing earns its keep: you capture the spread without parking your own cash between contracts.",
      "We connect you with transactional funding for the purchase side of your deal so you can take title and resell the same day. Your seller sees a clean cash purchase, your buyer sees a normal sale, and your wholesale spread stays between the two closing statements instead of on an assignment contract.",
      "The fee schedule is published on this page and stays flat across every city and county in the metro. You can underwrite the funding cost into your offer before you tie up the property, and there are no surprise charges at the closing table."
    ],
    steps: [
      { title: "Submit your deal", text: "Send the property address, your contract price, the resale price, and the title company handling the file. Ranch homes off Josey Lane and two stories near the turnpike both fit the same form." },
      { title: "We review the numbers", text: "The purchase, the resale, and the paperwork get reviewed with the title company. Questions get answered before closing day, not at the table." },
      { title: "Funding closes your purchase", text: "On closing day the funds for your purchase side are wired. Your resale closes right after, the funds and fee come out of the proceeds, and the spread is yours." }
    ],
    faqs: [
      { q: "Do you fund double closings in Carrollton?", a: "Yes. Deals across Carrollton fit, from the older subdivisions near the historic square to the neighborhoods along I-35E and the George Bush Turnpike. Single family homes and townhouses both work when the numbers do." },
      { q: "What kinds of Carrollton properties work for a double closing?", a: "Most Carrollton wholesale deals are 1960s through 1980s brick homes with dated interiors. End buyers renovate them for families drawn to the schools and the central location, so resales hold up well." },
      { q: "What is a double closing?", a: "A double closing is two back to back transactions on the same property on the same day. You buy the home from the seller, take title, and immediately resell it to your end buyer. Because you take title in between, your purchase price and your resale price stay on separate closing statements instead of one assignment contract." },
      { q: "How fast can funding be ready?", a: "Funding can be ready in as little as 24 hours once we have the deal details and the title company information. Files with complete paperwork move fastest, so send everything you have when you submit the form." },
      { q: "What does double close funding cost?", a: "Fees follow the schedule on this page: {{tier1Rate}} on deals up to {{tier1Cap}} with a {{tier1Minimum}} minimum, {{tier2Rate}} from {{tier1Cap}} to {{tier2Cap}}, and {{tier3Rate}} from {{tier2Cap}} to {{fundingMax}}. Extra days, a second closing company, or special paperwork carry the additional fees listed in the schedule." },
      { q: "Can you fund EMD or a Morby Method deal?", a: "Yes. Earnest money deposits and Morby Method structures are part of what we fund. Morby Method fees are paid upfront by Zelle or wire, as listed in the fee schedule above." }
    ],
    nearby: ["farmers-branch", "lewisville", "coppell"],
    blurb: "Classic I-35E renovation territory. 1960s through 1980s brick homes reselling to families chasing schools and location."
  },
  {
    slug: "richardson",
    name: "Richardson",
    state: "TX",
    stateName: "Texas",
    county: "Dallas County",
    formName: FORM,
    title: "Double Close Funding in Richardson, TX | Transactional Funding",
    description: "Double close funding for Richardson, TX wholesalers. Postwar ranch homes near the Telecom Corridor. Fees from {{tier1Rate}}.",
    h1Bottom: "in Richardson, Texas",
    hero: "Richardson's postwar neighborhoods are some of the most reliable renovation stock in the metro. Heights Park, Canyon Creek and the streets around the Telecom Corridor hold 1950s through 1970s ranch homes on generous lots, and renovated examples resell to buyers who want the location near US-75 and the University of Texas at Dallas without Plano prices. Entry points have climbed, so disciplined contracts matter. DFW Wholesale Double Close connects you with transactional funding for Richardson deals. You take title with the funder's money, resell to your end buyer the same day, and your markup stays off a single assignment contract. Submit your Richardson deal through the form and funding can be ready in as little as 24 hours.",
    localNoteTitle: "How double closings work in Richardson",
    localNote: "Texas closings typically run through a title company, and most investor files close with the title company the end buyer already uses. Texas charges no state transfer tax, and title insurance premium rates are set at the state level, so the premium itself does not change between title companies while other fees vary by office. Richardson spans Dallas and Collin counties, so the deed records with the county clerk where the property actually sits. The title company can confirm the county and anything else property specific.",
    whyHeading: "Why Richardson wholesalers use us",
    why: [
      "Richardson's ranch homes sit in one of the metro's tightest resale markets, so the constraint is usually getting the contract, not finding the buyer. A double closing keeps your capital free to chase the next one while the funded purchase and resale close the same day.",
      "We connect you with transactional funding for the purchase side of your deal so you can take title and resell the same day. Your seller sees a clean cash purchase, your buyer sees a normal sale, and your wholesale spread stays between the two closing statements instead of on an assignment contract.",
      "The fee schedule is published on this page and stays flat across every city and county in the metro. You can underwrite the funding cost into your offer before you tie up the property, and there are no surprise charges at the closing table."
    ],
    steps: [
      { title: "Submit your deal", text: "Send the property address, your contract price, the resale price, and the title company handling the file. Heights Park ranch homes and Canyon Creek two stories both fit the same form." },
      { title: "We review the numbers", text: "The purchase, the resale, and the paperwork get reviewed with the title company. Questions get answered before closing day, not at the table." },
      { title: "Funding closes your purchase", text: "On closing day the funds for your purchase side are wired. Your resale closes right after, the funds and fee come out of the proceeds, and the spread is yours." }
    ],
    faqs: [
      { q: "Do you fund double closings in Richardson?", a: "Yes. Deals across Richardson fit, from Heights Park and Canyon Creek to the neighborhoods along US-75 and the Telecom Corridor. Single family homes and townhouses both work when the numbers do." },
      { q: "What kinds of Richardson properties work for a double closing?", a: "Most Richardson wholesale deals are 1950s through 1970s ranch homes with dated interiors on established lots. End buyers renovate them for professionals working along the corridor and families buying into the schools." },
      { q: "What is a double closing?", a: "A double closing is two back to back transactions on the same property on the same day. You buy the home from the seller, take title, and immediately resell it to your end buyer. Because you take title in between, your purchase price and your resale price stay on separate closing statements instead of one assignment contract." },
      { q: "How fast can funding be ready?", a: "Funding can be ready in as little as 24 hours once we have the deal details and the title company information. Files with complete paperwork move fastest, so send everything you have when you submit the form." },
      { q: "What does double close funding cost?", a: "Fees follow the schedule on this page: {{tier1Rate}} on deals up to {{tier1Cap}} with a {{tier1Minimum}} minimum, {{tier2Rate}} from {{tier1Cap}} to {{tier2Cap}}, and {{tier3Rate}} from {{tier2Cap}} to {{fundingMax}}. Extra days, a second closing company, or special paperwork carry the additional fees listed in the schedule." },
      { q: "Can you fund EMD or a Morby Method deal?", a: "Yes. Earnest money deposits and Morby Method structures are part of what we fund. Morby Method fees are paid upfront by Zelle or wire, as listed in the fee schedule above." }
    ],
    nearby: ["garland", "plano", "dallas"],
    blurb: "Postwar ranch homes on generous lots near the Telecom Corridor. One of the metro's tightest resale markets."
  },
  {
    slug: "rowlett",
    name: "Rowlett",
    state: "TX",
    stateName: "Texas",
    county: "Dallas County",
    formName: FORM,
    title: "Double Close Funding in Rowlett, TX | Transactional Funding",
    description: "Double close funding for Rowlett, TX wholesalers. Lake Ray Hubbard peninsula homes from the 1970s onward. Fees from {{tier1Rate}}.",
    h1Bottom: "in Rowlett, Texas",
    hero: "Rowlett wraps around a peninsula on Lake Ray Hubbard, and the lake shapes its market. Older 1970s and 1980s homes near Dalrock and the original townsite offer the entry points, while newer bayside sections trade higher with buyers who want the water and the commute down President George Bush Turnpike. Dated homes here attract renovators reselling to families who stretch for the lake lifestyle. DFW Wholesale Double Close connects you with transactional funding for Rowlett deals. You take title with the funder's money, resell to your end buyer the same day, and your spread stays off a single assignment contract. Submit your Rowlett deal through the form and funding can be ready in as little as 24 hours.",
    localNoteTitle: "How double closings work in Rowlett",
    localNote: "Texas closings typically run through a title company, and most investor files close with the title company the end buyer already uses. Texas charges no state transfer tax, and title insurance premium rates are set at the state level, so the premium itself does not change between title companies while other fees vary by office. Rowlett spans Dallas and Rockwall counties, so the deed records with the county clerk where the property actually sits. Homes near the lake can carry flood plain questions, which the title company and your buyer's lender can confirm. The title company can confirm anything property specific.",
    whyHeading: "Why Rowlett wholesalers use us",
    why: [
      "Rowlett's older lake-adjacent neighborhoods give renovators a product that resells on lifestyle as much as finishes. A double closing lets you capture that resale premium without leaving your own money in the deal between contracts.",
      "We connect you with transactional funding for the purchase side of your deal so you can take title and resell the same day. Your seller sees a clean cash purchase, your buyer sees a normal sale, and your wholesale spread stays between the two closing statements instead of on an assignment contract.",
      "The fee schedule is published on this page and stays flat across every city and county in the metro. You can underwrite the funding cost into your offer before you tie up the property, and there are no surprise charges at the closing table."
    ],
    steps: [
      { title: "Submit your deal", text: "Send the property address, your contract price, the resale price, and the title company handling the file. Older Dalrock homes and newer bayside builds both fit the same form." },
      { title: "We review the numbers", text: "The purchase, the resale, and the paperwork get reviewed with the title company. Questions get answered before closing day, not at the table." },
      { title: "Funding closes your purchase", text: "On closing day the funds for your purchase side are wired. Your resale closes right after, the funds and fee come out of the proceeds, and the spread is yours." }
    ],
    faqs: [
      { q: "Do you fund double closings in Rowlett?", a: "Yes. Deals across Rowlett fit, from the older neighborhoods near the original townsite and Dalrock to the newer sections along the lake. Single family homes and townhouses both work when the numbers do." },
      { q: "What kinds of Rowlett properties work for a double closing?", a: "Most Rowlett wholesale deals are 1970s through 1990s homes with dated interiors, many near the lake. End buyers renovate them for families who want Lake Ray Hubbard access without Rockwall prices." },
      { q: "What is a double closing?", a: "A double closing is two back to back transactions on the same property on the same day. You buy the home from the seller, take title, and immediately resell it to your end buyer. Because you take title in between, your purchase price and your resale price stay on separate closing statements instead of one assignment contract." },
      { q: "How fast can funding be ready?", a: "Funding can be ready in as little as 24 hours once we have the deal details and the title company information. Files with complete paperwork move fastest, so send everything you have when you submit the form." },
      { q: "What does double close funding cost?", a: "Fees follow the schedule on this page: {{tier1Rate}} on deals up to {{tier1Cap}} with a {{tier1Minimum}} minimum, {{tier2Rate}} from {{tier1Cap}} to {{tier2Cap}}, and {{tier3Rate}} from {{tier2Cap}} to {{fundingMax}}. Extra days, a second closing company, or special paperwork carry the additional fees listed in the schedule." },
      { q: "Can you fund EMD or a Morby Method deal?", a: "Yes. Earnest money deposits and Morby Method structures are part of what we fund. Morby Method fees are paid upfront by Zelle or wire, as listed in the fee schedule above." }
    ],
    nearby: ["rockwall", "garland", "sachse"],
    blurb: "A Lake Ray Hubbard peninsula town. Older lakeside homes that resell on lifestyle to stretched buyers."
  },
  {
    slug: "desoto",
    name: "DeSoto",
    state: "TX",
    stateName: "Texas",
    county: "Dallas County",
    formName: FORM,
    title: "Double Close Funding in DeSoto, TX | Transactional Funding",
    description: "Double close funding for DeSoto, TX wholesalers. Best Southwest homes from the 1960s through 1990s. Fees from {{tier1Rate}}.",
    h1Bottom: "in DeSoto, Texas",
    hero: "DeSoto anchors the Best Southwest corner of the county, and its housing stock is built for wholesale math. Neighborhoods off Hampton Road and Pleasant Run hold 1960s through 1990s homes, many with dated interiors, at entry prices well below the northern suburbs. Renovated homes resell to families who want established streets and a short commute up I-35E into Dallas. DFW Wholesale Double Close connects you with transactional funding for DeSoto deals. You take title with the funder's money, resell to your end buyer the same day, and your markup stays off a single assignment contract. Submit your DeSoto deal through the form and funding can be ready in as little as 24 hours.",
    localNoteTitle: "How double closings work in DeSoto",
    localNote: "Texas closings typically run through a title company, and most investor files close with the title company the end buyer already uses. Texas charges no state transfer tax, and title insurance premium rates are set at the state level, so the premium itself does not change between title companies while other fees vary by office. Many DeSoto homes are long-held family properties, so estate and probate paperwork comes up regularly on wholesale files. Deeds record with the Dallas County clerk. The title company can confirm anything property specific.",
    whyHeading: "Why DeSoto wholesalers use us",
    why: [
      "DeSoto's combination of low entry prices and steady family resale demand makes it one of the county's most consistent flip markets. A double closing lets you convert that demand into same day spreads without your own cash sitting in escrow.",
      "We connect you with transactional funding for the purchase side of your deal so you can take title and resell the same day. Your seller sees a clean cash purchase, your buyer sees a normal sale, and your wholesale spread stays between the two closing statements instead of on an assignment contract.",
      "The fee schedule is published on this page and stays flat across every city and county in the metro. You can underwrite the funding cost into your offer before you tie up the property, and there are no surprise charges at the closing table."
    ],
    steps: [
      { title: "Submit your deal", text: "Send the property address, your contract price, the resale price, and the title company handling the file. Homes off Hampton Road and Pleasant Run both fit the same form." },
      { title: "We review the numbers", text: "The purchase, the resale, and the paperwork get reviewed with the title company. Questions get answered before closing day, not at the table." },
      { title: "Funding closes your purchase", text: "On closing day the funds for your purchase side are wired. Your resale closes right after, the funds and fee come out of the proceeds, and the spread is yours." }
    ],
    faqs: [
      { q: "Do you fund double closings in DeSoto?", a: "Yes. Deals across DeSoto fit, from the neighborhoods along Hampton Road to the streets near Pleasant Run and the Ten Mile Creek corridor. Single family homes work when the numbers do." },
      { q: "What kinds of DeSoto properties work for a double closing?", a: "Most DeSoto wholesale deals are 1960s through 1990s single family homes with dated interiors, many of them long-held family properties. End buyers renovate them for families buying into the established southern suburbs." },
      { q: "What is a double closing?", a: "A double closing is two back to back transactions on the same property on the same day. You buy the home from the seller, take title, and immediately resell it to your end buyer. Because you take title in between, your purchase price and your resale price stay on separate closing statements instead of one assignment contract." },
      { q: "How fast can funding be ready?", a: "Funding can be ready in as little as 24 hours once we have the deal details and the title company information. Files with complete paperwork move fastest, so send everything you have when you submit the form." },
      { q: "What does double close funding cost?", a: "Fees follow the schedule on this page: {{tier1Rate}} on deals up to {{tier1Cap}} with a {{tier1Minimum}} minimum, {{tier2Rate}} from {{tier1Cap}} to {{tier2Cap}}, and {{tier3Rate}} from {{tier2Cap}} to {{fundingMax}}. Extra days, a second closing company, or special paperwork carry the additional fees listed in the schedule." },
      { q: "Can you fund EMD or a Morby Method deal?", a: "Yes. Earnest money deposits and Morby Method structures are part of what we fund. Morby Method fees are paid upfront by Zelle or wire, as listed in the fee schedule above." }
    ],
    nearby: ["cedar-hill", "lancaster", "duncanville"],
    blurb: "The Best Southwest anchor. 1960s through 1990s homes with family resale demand up I-35E."
  },
  {
    slug: "cedar-hill",
    name: "Cedar Hill",
    state: "TX",
    stateName: "Texas",
    county: "Dallas County",
    formName: FORM,
    title: "Double Close Funding in Cedar Hill, TX | Transactional Funding",
    description: "Double close funding for Cedar Hill, TX wholesalers. Hillside homes near Joe Pool Lake and the state park. Fees from {{tier1Rate}}.",
    h1Bottom: "in Cedar Hill, Texas",
    hero: "Cedar Hill trades on topography the rest of the county does not have. The city climbs into real hills above Joe Pool Lake, and its neighborhoods run from 1970s ramblers on winding streets to 2000s builds near Cedar Hill State Park. Dated homes here attract renovators whose buyers want the views and the park access while staying inside the Dallas commute. DFW Wholesale Double Close connects you with transactional funding for Cedar Hill deals. You take title with the funder's money, resell to your end buyer the same day, and your spread stays off a single assignment contract. Submit your Cedar Hill deal through the form and funding can be ready in as little as 24 hours.",
    localNoteTitle: "How double closings work in Cedar Hill",
    localNote: "Texas closings typically run through a title company, and most investor files close with the title company the end buyer already uses. Texas charges no state transfer tax, and title insurance premium rates are set at the state level, so the premium itself does not change between title companies while other fees vary by office. Cedar Hill's sloped lots and lake-adjacent sections can bring drainage and flood plain questions into a file. Deeds record with the Dallas County clerk. The title company can confirm anything property specific.",
    whyHeading: "Why Cedar Hill wholesalers use us",
    why: [
      "Cedar Hill gives renovators a differentiated product: hills, trees and lake access at prices below the northern suburbs. A double closing lets you capture that resale premium without your own capital tied up between the two transactions.",
      "We connect you with transactional funding for the purchase side of your deal so you can take title and resell the same day. Your seller sees a clean cash purchase, your buyer sees a normal sale, and your wholesale spread stays between the two closing statements instead of on an assignment contract.",
      "The fee schedule is published on this page and stays flat across every city and county in the metro. You can underwrite the funding cost into your offer before you tie up the property, and there are no surprise charges at the closing table."
    ],
    steps: [
      { title: "Submit your deal", text: "Send the property address, your contract price, the resale price, and the title company handling the file. Hillside ramblers and newer builds near the state park both fit the same form." },
      { title: "We review the numbers", text: "The purchase, the resale, and the paperwork get reviewed with the title company. Questions get answered before closing day, not at the table." },
      { title: "Funding closes your purchase", text: "On closing day the funds for your purchase side are wired. Your resale closes right after, the funds and fee come out of the proceeds, and the spread is yours." }
    ],
    faqs: [
      { q: "Do you fund double closings in Cedar Hill?", a: "Yes. Deals across Cedar Hill fit, from the older hillside neighborhoods to the newer sections near Joe Pool Lake and Cedar Hill State Park. Single family homes work when the numbers do." },
      { q: "What kinds of Cedar Hill properties work for a double closing?", a: "Most Cedar Hill wholesale deals are 1970s through 2000s single family homes with dated interiors, some on sloped or wooded lots. End buyers renovate them for buyers who want the terrain and the park while commuting into Dallas." },
      { q: "What is a double closing?", a: "A double closing is two back to back transactions on the same property on the same day. You buy the home from the seller, take title, and immediately resell it to your end buyer. Because you take title in between, your purchase price and your resale price stay on separate closing statements instead of one assignment contract." },
      { q: "How fast can funding be ready?", a: "Funding can be ready in as little as 24 hours once we have the deal details and the title company information. Files with complete paperwork move fastest, so send everything you have when you submit the form." },
      { q: "What does double close funding cost?", a: "Fees follow the schedule on this page: {{tier1Rate}} on deals up to {{tier1Cap}} with a {{tier1Minimum}} minimum, {{tier2Rate}} from {{tier1Cap}} to {{tier2Cap}}, and {{tier3Rate}} from {{tier2Cap}} to {{fundingMax}}. Extra days, a second closing company, or special paperwork carry the additional fees listed in the schedule." },
      { q: "Can you fund EMD or a Morby Method deal?", a: "Yes. Earnest money deposits and Morby Method structures are part of what we fund. Morby Method fees are paid upfront by Zelle or wire, as listed in the fee schedule above." }
    ],
    nearby: ["desoto", "duncanville", "midlothian"],
    blurb: "Real hills above Joe Pool Lake. Ramblers and newer builds that resell on terrain and park access."
  },
  {
    slug: "coppell",
    name: "Coppell",
    state: "TX",
    stateName: "Texas",
    county: "Dallas County",
    formName: FORM,
    title: "Double Close Funding in Coppell, TX | Transactional Funding",
    description: "Double close funding for Coppell, TX wholesalers. 1970s through 1990s homes by DFW Airport. Fees from {{tier1Rate}}.",
    h1Bottom: "in Coppell, Texas",
    hero: "Coppell is a small city with outsized resale demand, built mostly in the 1970s through 1990s in the northwest corner of the county near DFW Airport. Its older sections around Old Town hold ranch homes that now trade at prices the original owners would not recognize, and dated examples draw renovators whose buyers are chasing the schools and the airport corridor location. Entry prices run high, so deals here reward disciplined underwriting. DFW Wholesale Double Close connects you with transactional funding for Coppell deals. You take title with the funder's money, resell to your end buyer the same day, and your markup stays off a single assignment contract. Submit your Coppell deal through the form and funding can be ready in as little as 24 hours.",
    localNoteTitle: "How double closings work in Coppell",
    localNote: "Texas closings typically run through a title company, and most investor files close with the title company the end buyer already uses. Texas charges no state transfer tax, and title insurance premium rates are set at the state level, so the premium itself does not change between title companies while other fees vary by office. Coppell spans Dallas and Denton counties, so the deed records with the county clerk where the property actually sits. The title company can confirm the county and anything else property specific.",
    whyHeading: "Why Coppell wholesalers use us",
    why: [
      "Coppell deals are higher-dollar and harder to tie up, which is exactly when keeping your own cash out of the middle matters most. A double closing funds the purchase side so your capital stays free for the next contract.",
      "We connect you with transactional funding for the purchase side of your deal so you can take title and resell the same day. Your seller sees a clean cash purchase, your buyer sees a normal sale, and your wholesale spread stays between the two closing statements instead of on an assignment contract.",
      "The fee schedule is published on this page and stays flat across every city and county in the metro. You can underwrite the funding cost into your offer before you tie up the property, and there are no surprise charges at the closing table."
    ],
    steps: [
      { title: "Submit your deal", text: "Send the property address, your contract price, the resale price, and the title company handling the file. Old Town ranch homes and 1990s two stories both fit the same form." },
      { title: "We review the numbers", text: "The purchase, the resale, and the paperwork get reviewed with the title company. Questions get answered before closing day, not at the table." },
      { title: "Funding closes your purchase", text: "On closing day the funds for your purchase side are wired. Your resale closes right after, the funds and fee come out of the proceeds, and the spread is yours." }
    ],
    faqs: [
      { q: "Do you fund double closings in Coppell?", a: "Yes. Deals across Coppell fit, from the older streets around Old Town to the neighborhoods built through the 1990s near the airport corridor. Single family homes and townhouses both work when the numbers do." },
      { q: "What kinds of Coppell properties work for a double closing?", a: "Most Coppell wholesale deals are 1970s through 1990s single family homes with dated interiors. End buyers renovate them for families and airport corridor professionals chasing the schools and the location." },
      { q: "What is a double closing?", a: "A double closing is two back to back transactions on the same property on the same day. You buy the home from the seller, take title, and immediately resell it to your end buyer. Because you take title in between, your purchase price and your resale price stay on separate closing statements instead of one assignment contract." },
      { q: "How fast can funding be ready?", a: "Funding can be ready in as little as 24 hours once we have the deal details and the title company information. Files with complete paperwork move fastest, so send everything you have when you submit the form." },
      { q: "What does double close funding cost?", a: "Fees follow the schedule on this page: {{tier1Rate}} on deals up to {{tier1Cap}} with a {{tier1Minimum}} minimum, {{tier2Rate}} from {{tier1Cap}} to {{tier2Cap}}, and {{tier3Rate}} from {{tier2Cap}} to {{fundingMax}}. Extra days, a second closing company, or special paperwork carry the additional fees listed in the schedule." },
      { q: "Can you fund EMD or a Morby Method deal?", a: "Yes. Earnest money deposits and Morby Method structures are part of what we fund. Morby Method fees are paid upfront by Zelle or wire, as listed in the fee schedule above." }
    ],
    nearby: ["irving", "lewisville", "farmers-branch"],
    blurb: "Small city, outsized resale demand. 1970s through 1990s homes near the airport corridor at higher price points."
  },
  {
    slug: "lancaster",
    name: "Lancaster",
    state: "TX",
    stateName: "Texas",
    county: "Dallas County",
    formName: FORM,
    title: "Double Close Funding in Lancaster, TX | Transactional Funding",
    description: "Double close funding for Lancaster, TX wholesalers. Historic square to postwar streets in the southern county. Fees from {{tier1Rate}}.",
    h1Bottom: "in Lancaster, Texas",
    hero: "Lancaster is one of the oldest communities in Dallas County, and its housing stock shows every decade of it. The streets around the historic town square hold early century homes, the postwar boom added modest brick houses, and newer subdivisions keep arriving along I-35E and I-20 as growth pushes south. Entry prices are among the lowest in the county, which is why investor buyers work the city steadily. DFW Wholesale Double Close connects you with transactional funding for Lancaster deals. You take title with the funder's money, resell to your end buyer the same day, and your spread stays off a single assignment contract. Submit your Lancaster deal through the form and funding can be ready in as little as 24 hours.",
    localNoteTitle: "How double closings work in Lancaster",
    localNote: "Texas closings typically run through a title company, and most investor files close with the title company the end buyer already uses. Texas charges no state transfer tax, and title insurance premium rates are set at the state level, so the premium itself does not change between title companies while other fees vary by office. Homes near Lancaster's historic square can fall under the city's preservation guidelines, and older properties often bring estate paperwork with them. Deeds record with the Dallas County clerk. The title company can confirm anything property specific.",
    whyHeading: "Why Lancaster wholesalers use us",
    why: [
      "Lancaster's low entry prices let you put multiple deals through at once, and its southern-county growth keeps new buyers arriving. A double closing keeps your capital rotating between contracts instead of parked in a single purchase.",
      "We connect you with transactional funding for the purchase side of your deal so you can take title and resell the same day. Your seller sees a clean cash purchase, your buyer sees a normal sale, and your wholesale spread stays between the two closing statements instead of on an assignment contract.",
      "The fee schedule is published on this page and stays flat across every city and county in the metro. You can underwrite the funding cost into your offer before you tie up the property, and there are no surprise charges at the closing table."
    ],
    steps: [
      { title: "Submit your deal", text: "Send the property address, your contract price, the resale price, and the title company handling the file. Historic square homes and newer I-35E corridor builds both fit the same form." },
      { title: "We review the numbers", text: "The purchase, the resale, and the paperwork get reviewed with the title company. Questions get answered before closing day, not at the table." },
      { title: "Funding closes your purchase", text: "On closing day the funds for your purchase side are wired. Your resale closes right after, the funds and fee come out of the proceeds, and the spread is yours." }
    ],
    faqs: [
      { q: "Do you fund double closings in Lancaster?", a: "Yes. Deals across Lancaster fit, from the streets around the historic square to the postwar neighborhoods and the newer subdivisions along I-35E and I-20. Single family homes work when the numbers do." },
      { q: "What kinds of Lancaster properties work for a double closing?", a: "Most Lancaster wholesale deals are early century through postwar single family homes, many of them estate or long-held properties. End buyers include renovators reselling to first time buyers and investors holding rentals for the southern county's growing workforce." },
      { q: "What is a double closing?", a: "A double closing is two back to back transactions on the same property on the same day. You buy the home from the seller, take title, and immediately resell it to your end buyer. Because you take title in between, your purchase price and your resale price stay on separate closing statements instead of one assignment contract." },
      { q: "How fast can funding be ready?", a: "Funding can be ready in as little as 24 hours once we have the deal details and the title company information. Files with complete paperwork move fastest, so send everything you have when you submit the form." },
      { q: "What does double close funding cost?", a: "Fees follow the schedule on this page: {{tier1Rate}} on deals up to {{tier1Cap}} with a {{tier1Minimum}} minimum, {{tier2Rate}} from {{tier1Cap}} to {{tier2Cap}}, and {{tier3Rate}} from {{tier2Cap}} to {{fundingMax}}. Extra days, a second closing company, or special paperwork carry the additional fees listed in the schedule." },
      { q: "Can you fund EMD or a Morby Method deal?", a: "Yes. Earnest money deposits and Morby Method structures are part of what we fund. Morby Method fees are paid upfront by Zelle or wire, as listed in the fee schedule above." }
    ],
    nearby: ["desoto", "waxahachie", "dallas"],
    blurb: "One of the county's oldest communities. Early century homes to new subdivisions, with the county's lowest entry prices."
  },
  {
    slug: "duncanville",
    name: "Duncanville",
    state: "TX",
    stateName: "Texas",
    county: "Dallas County",
    formName: FORM,
    title: "Double Close Funding in Duncanville, TX | Transactional Funding",
    description: "Double close funding for Duncanville, TX wholesalers. 1960s through 1980s homes near the I-20 corridor. Fees from {{tier1Rate}}.",
    h1Bottom: "in Duncanville, Texas",
    hero: "Duncanville packs a lot of renovation stock into a small footprint. Its streets are lined with 1960s through 1980s ranch homes and split levels, many with original interiors, and renovated examples resell to buyers who want an established neighborhood with quick access to I-20 and the southwest job corridor. Entry prices stay below the citywide Dallas average, which leaves room for a spread on the right contract. DFW Wholesale Double Close connects you with transactional funding for Duncanville deals. You take title with the funder's money, resell to your end buyer the same day, and your markup stays off a single assignment contract. Submit your Duncanville deal through the form and funding can be ready in as little as 24 hours.",
    localNoteTitle: "How double closings work in Duncanville",
    localNote: "Texas closings typically run through a title company, and most investor files close with the title company the end buyer already uses. Texas charges no state transfer tax, and title insurance premium rates are set at the state level, so the premium itself does not change between title companies while other fees vary by office. Duncanville's older slabs mean foundation and cast iron sewer line questions come up often in buyer inspections. Deeds record with the Dallas County clerk. The title company can confirm anything property specific.",
    whyHeading: "Why Duncanville wholesalers use us",
    why: [
      "Duncanville's compact, homogeneous housing stock lets rehab buyers underwrite fast and confidently. A double closing matches that speed on your side: funded purchase in the morning, resale right after, spread in your account.",
      "We connect you with transactional funding for the purchase side of your deal so you can take title and resell the same day. Your seller sees a clean cash purchase, your buyer sees a normal sale, and your wholesale spread stays between the two closing statements instead of on an assignment contract.",
      "The fee schedule is published on this page and stays flat across every city and county in the metro. You can underwrite the funding cost into your offer before you tie up the property, and there are no surprise charges at the closing table."
    ],
    steps: [
      { title: "Submit your deal", text: "Send the property address, your contract price, the resale price, and the title company handling the file. Ranch homes and split levels across the city both fit the same form." },
      { title: "We review the numbers", text: "The purchase, the resale, and the paperwork get reviewed with the title company. Questions get answered before closing day, not at the table." },
      { title: "Funding closes your purchase", text: "On closing day the funds for your purchase side are wired. Your resale closes right after, the funds and fee come out of the proceeds, and the spread is yours." }
    ],
    faqs: [
      { q: "Do you fund double closings in Duncanville?", a: "Yes. Deals across Duncanville fit, from the neighborhoods along Main Street to the streets near I-20 and the city limit lines. Single family homes work when the numbers do." },
      { q: "What kinds of Duncanville properties work for a double closing?", a: "Most Duncanville wholesale deals are 1960s through 1980s ranch homes and split levels with original interiors. End buyers renovate them for first time buyers and families wanting established streets near I-20." },
      { q: "What is a double closing?", a: "A double closing is two back to back transactions on the same property on the same day. You buy the home from the seller, take title, and immediately resell it to your end buyer. Because you take title in between, your purchase price and your resale price stay on separate closing statements instead of one assignment contract." },
      { q: "How fast can funding be ready?", a: "Funding can be ready in as little as 24 hours once we have the deal details and the title company information. Files with complete paperwork move fastest, so send everything you have when you submit the form." },
      { q: "What does double close funding cost?", a: "Fees follow the schedule on this page: {{tier1Rate}} on deals up to {{tier1Cap}} with a {{tier1Minimum}} minimum, {{tier2Rate}} from {{tier1Cap}} to {{tier2Cap}}, and {{tier3Rate}} from {{tier2Cap}} to {{fundingMax}}. Extra days, a second closing company, or special paperwork carry the additional fees listed in the schedule." },
      { q: "Can you fund EMD or a Morby Method deal?", a: "Yes. Earnest money deposits and Morby Method structures are part of what we fund. Morby Method fees are paid upfront by Zelle or wire, as listed in the fee schedule above." }
    ],
    nearby: ["desoto", "cedar-hill", "dallas"],
    blurb: "Compact city, deep renovation stock. 1960s through 1980s ranch homes and split levels near I-20."
  },
  {
    slug: "farmers-branch",
    name: "Farmers Branch",
    state: "TX",
    stateName: "Texas",
    county: "Dallas County",
    formName: FORM,
    title: "Double Close Funding in Farmers Branch, TX | Transactional Funding",
    description: "Double close funding for Farmers Branch, TX wholesalers. 1950s through 1970s homes inside the northwest loop. Fees from {{tier1Rate}}.",
    h1Bottom: "in Farmers Branch, Texas",
    hero: "Farmers Branch is an inner-ring suburb whose moment keeps coming. Its 1950s through 1970s ranch homes sit minutes from I-635 and I-35E, and renovated examples resell to buyers who want a close-in address without Dallas prices. The city's steady redevelopment along the old mercantile corridors keeps new demand arriving, and the older housing stock keeps producing candidates for renovation. DFW Wholesale Double Close connects you with transactional funding for Farmers Branch deals. You take title with the funder's money, resell to your end buyer the same day, and your spread stays off a single assignment contract. Submit your Farmers Branch deal through the form and funding can be ready in as little as 24 hours.",
    localNoteTitle: "How double closings work in Farmers Branch",
    localNote: "Texas closings typically run through a title company, and most investor files close with the title company the end buyer already uses. Texas charges no state transfer tax, and title insurance premium rates are set at the state level, so the premium itself does not change between title companies while other fees vary by office. The city's older homes often sit on large lots where buyers ask about zoning and redevelopment potential. Deeds record with the Dallas County clerk. The title company can confirm anything property specific.",
    whyHeading: "Why Farmers Branch wholesalers use us",
    why: [
      "Farmers Branch rewards speed: close-in lots this size attract multiple investor buyers, and the one with funding ready usually wins. A double closing puts funded certainty behind your purchase side so you can close and resell the same day.",
      "We connect you with transactional funding for the purchase side of your deal so you can take title and resell the same day. Your seller sees a clean cash purchase, your buyer sees a normal sale, and your wholesale spread stays between the two closing statements instead of on an assignment contract.",
      "The fee schedule is published on this page and stays flat across every city and county in the metro. You can underwrite the funding cost into your offer before you tie up the property, and there are no surprise charges at the closing table."
    ],
    steps: [
      { title: "Submit your deal", text: "Send the property address, your contract price, the resale price, and the title company handling the file. Ranch homes near the historical park and streets off Valley View both fit the same form." },
      { title: "We review the numbers", text: "The purchase, the resale, and the paperwork get reviewed with the title company. Questions get answered before closing day, not at the table." },
      { title: "Funding closes your purchase", text: "On closing day the funds for your purchase side are wired. Your resale closes right after, the funds and fee come out of the proceeds, and the spread is yours." }
    ],
    faqs: [
      { q: "Do you fund double closings in Farmers Branch?", a: "Yes. Deals across Farmers Branch fit, from the postwar neighborhoods near the historical park to the streets along I-635 and I-35E. Single family homes and townhouses both work when the numbers do." },
      { q: "What kinds of Farmers Branch properties work for a double closing?", a: "Most Farmers Branch wholesale deals are 1950s through 1970s ranch homes on larger lots, many with dated interiors. End buyers include renovators reselling to close-in buyers and investors redeveloping along the city's commercial corridors." },
      { q: "What is a double closing?", a: "A double closing is two back to back transactions on the same property on the same day. You buy the home from the seller, take title, and immediately resell it to your end buyer. Because you take title in between, your purchase price and your resale price stay on separate closing statements instead of one assignment contract." },
      { q: "How fast can funding be ready?", a: "Funding can be ready in as little as 24 hours once we have the deal details and the title company information. Files with complete paperwork move fastest, so send everything you have when you submit the form." },
      { q: "What does double close funding cost?", a: "Fees follow the schedule on this page: {{tier1Rate}} on deals up to {{tier1Cap}} with a {{tier1Minimum}} minimum, {{tier2Rate}} from {{tier1Cap}} to {{tier2Cap}}, and {{tier3Rate}} from {{tier2Cap}} to {{fundingMax}}. Extra days, a second closing company, or special paperwork carry the additional fees listed in the schedule." },
      { q: "Can you fund EMD or a Morby Method deal?", a: "Yes. Earnest money deposits and Morby Method structures are part of what we fund. Morby Method fees are paid upfront by Zelle or wire, as listed in the fee schedule above." }
    ],
    nearby: ["carrollton", "coppell", "irving"],
    blurb: "Inner-ring ranch homes on larger lots, minutes from I-635. Steady renovation and redevelopment demand."
  },
  {
    slug: "sachse",
    name: "Sachse",
    state: "TX",
    stateName: "Texas",
    county: "Dallas County",
    formName: FORM,
    title: "Double Close Funding in Sachse, TX | Transactional Funding",
    description: "Double close funding for Sachse, TX wholesalers. 1970s through 2000s homes on the county's northeast edge. Fees from {{tier1Rate}}.",
    h1Bottom: "in Sachse, Texas",
    hero: "Sachse grew from a rural crossroads into a bedroom community on the county's northeast edge, and its housing stock runs from 1970s ranch homes on the older streets to 2000s subdivisions near Firewheel. Dated homes here attract renovators whose buyers want Garland-area pricing with newer construction around them, and the steady growth along the President George Bush Turnpike keeps resale demand building. DFW Wholesale Double Close connects you with transactional funding for Sachse deals. You take title with the funder's money, resell to your end buyer the same day, and your markup stays off a single assignment contract. Submit your Sachse deal through the form and funding can be ready in as little as 24 hours.",
    localNoteTitle: "How double closings work in Sachse",
    localNote: "Texas closings typically run through a title company, and most investor files close with the title company the end buyer already uses. Texas charges no state transfer tax, and title insurance premium rates are set at the state level, so the premium itself does not change between title companies while other fees vary by office. Sachse spans Dallas and Collin counties, so the deed records with the county clerk where the property actually sits. The title company can confirm the county and anything else property specific.",
    whyHeading: "Why Sachse wholesalers use us",
    why: [
      "Sachse sits where older rural properties meet new subdivision growth, so wholesale deals range from dated ranch homes to estate sales on larger lots. A double closing handles both the same way, with your capital free between contracts.",
      "We connect you with transactional funding for the purchase side of your deal so you can take title and resell the same day. Your seller sees a clean cash purchase, your buyer sees a normal sale, and your wholesale spread stays between the two closing statements instead of on an assignment contract.",
      "The fee schedule is published on this page and stays flat across every city and county in the metro. You can underwrite the funding cost into your offer before you tie up the property, and there are no surprise charges at the closing table."
    ],
    steps: [
      { title: "Submit your deal", text: "Send the property address, your contract price, the resale price, and the title company handling the file. Older ranch homes and newer Firewheel-area builds both fit the same form." },
      { title: "We review the numbers", text: "The purchase, the resale, and the paperwork get reviewed with the title company. Questions get answered before closing day, not at the table." },
      { title: "Funding closes your purchase", text: "On closing day the funds for your purchase side are wired. Your resale closes right after, the funds and fee come out of the proceeds, and the spread is yours." }
    ],
    faqs: [
      { q: "Do you fund double closings in Sachse?", a: "Yes. Deals across Sachse fit, from the older streets near the original crossroads to the newer subdivisions toward Firewheel. Single family homes work when the numbers do." },
      { q: "What kinds of Sachse properties work for a double closing?", a: "Most Sachse wholesale deals are 1970s through 2000s single family homes with dated interiors, plus occasional larger rural lots. End buyers renovate them for families who want northeast-county pricing near the turnpike." },
      { q: "What is a double closing?", a: "A double closing is two back to back transactions on the same property on the same day. You buy the home from the seller, take title, and immediately resell it to your end buyer. Because you take title in between, your purchase price and your resale price stay on separate closing statements instead of one assignment contract." },
      { q: "How fast can funding be ready?", a: "Funding can be ready in as little as 24 hours once we have the deal details and the title company information. Files with complete paperwork move fastest, so send everything you have when you submit the form." },
      { q: "What does double close funding cost?", a: "Fees follow the schedule on this page: {{tier1Rate}} on deals up to {{tier1Cap}} with a {{tier1Minimum}} minimum, {{tier2Rate}} from {{tier1Cap}} to {{tier2Cap}}, and {{tier3Rate}} from {{tier2Cap}} to {{fundingMax}}. Extra days, a second closing company, or special paperwork carry the additional fees listed in the schedule." },
      { q: "Can you fund EMD or a Morby Method deal?", a: "Yes. Earnest money deposits and Morby Method structures are part of what we fund. Morby Method fees are paid upfront by Zelle or wire, as listed in the fee schedule above." }
    ],
    nearby: ["garland", "rowlett", "wylie"],
    blurb: "Rural crossroads turned bedroom community. Older ranch homes meeting new subdivision growth on the northeast edge."
  },
  {
    slug: "fort-worth",
    name: "Fort Worth",
    state: "TX",
    stateName: "Texas",
    county: "Tarrant County",
    formName: FORM,
    title: "Double Close Funding in Fort Worth, TX | Transactional Funding for Wholesalers",
    description: "Transactional double close funding for Fort Worth wholesalers. Stop Six and Poly cottages to Ridglea and Wedgwood ranch homes. Fees from {{tier1Rate}}.",
    h1Bottom: "in Fort Worth, Texas",
    hero: "Fort Worth is the western engine of the metro's investor market, and its older neighborhoods are wholesale territory block by block. Stop Six, Poly and the east side hold early century and postwar cottages at some of the metro's lowest entry prices, while Wedgwood, Ridglea and the streets near TCU offer mid-century ranch homes that resell to move up buyers. The Near Southside's revival keeps pulling renovation demand deeper into the city. DFW Wholesale Double Close connects you with transactional funding for deals anywhere in Fort Worth. You take title with the funder's money, resell to your end buyer the same day, and your markup stays off a single assignment contract. Submit your Fort Worth deal through the form and funding can be ready in as little as 24 hours.",
    localNoteTitle: "How double closings work in Fort Worth",
    localNote: "Texas closings typically run through a title company, and most investor files close with the title company the end buyer already uses. Texas charges no state transfer tax, and title insurance premium rates are set at the state level, so the premium itself does not change between title companies while other fees vary by office. Fort Worth's older east side homes often carry estate paperwork, and historic districts like the Near Southside can add design guidelines for exterior changes. Deeds record with the Tarrant County clerk. The title company can confirm anything property specific.",
    whyHeading: "Why Fort Worth wholesalers use us",
    why: [
      "Fort Worth gives wholesalers range: low-dollar cottage deals on the east side, mid-range ranch renovations in the southwest neighborhoods, and higher price points near TCU and the Cultural District. A double closing runs the same process on all of them, so your system scales with the city.",
      "We connect you with transactional funding for the purchase side of your deal so you can take title and resell the same day. Your seller sees a clean cash purchase, your buyer sees a normal sale, and your wholesale spread stays between the two closing statements instead of on an assignment contract.",
      "The fee schedule is published on this page and stays flat across every city and county in the metro. You can underwrite the funding cost into your offer before you tie up the property, and there are no surprise charges at the closing table."
    ],
    steps: [
      { title: "Submit your deal", text: "Send the property address, your contract price, the resale price, and the title company handling the file. Stop Six cottages and Wedgwood ranch homes both fit the same form." },
      { title: "We review the numbers", text: "The purchase, the resale, and the paperwork get reviewed with the title company. Questions get answered before closing day, not at the table." },
      { title: "Funding closes your purchase", text: "On closing day the funds for your purchase side are wired. Your resale closes right after, the funds and fee come out of the proceeds, and the spread is yours." }
    ],
    faqs: [
      { q: "Do you fund double closings in Fort Worth?", a: "Yes. Deals across the city fit, from Stop Six and Poly to Wedgwood, Ridglea and the Near Southside. Cottages, ranch homes and brick two stories all work when the numbers do." },
      { q: "What kinds of Fort Worth properties work for a double closing?", a: "Most Fort Worth wholesale deals are early century through 1970s single family homes with dated interiors or deferred maintenance. End buyers range from renovators reselling near the Near Southside to landlords holding rentals across the east side." },
      { q: "What is a double closing?", a: "A double closing is two back to back transactions on the same property on the same day. You buy the home from the seller, take title, and immediately resell it to your end buyer. Because you take title in between, your purchase price and your resale price stay on separate closing statements instead of one assignment contract." },
      { q: "How fast can funding be ready?", a: "Funding can be ready in as little as 24 hours once we have the deal details and the title company information. Files with complete paperwork move fastest, so send everything you have when you submit the form." },
      { q: "What does double close funding cost?", a: "Fees follow the schedule on this page: {{tier1Rate}} on deals up to {{tier1Cap}} with a {{tier1Minimum}} minimum, {{tier2Rate}} from {{tier1Cap}} to {{tier2Cap}}, and {{tier3Rate}} from {{tier2Cap}} to {{fundingMax}}. Extra days, a second closing company, or special paperwork carry the additional fees listed in the schedule." },
      { q: "Can you fund EMD or a Morby Method deal?", a: "Yes. Earnest money deposits and Morby Method structures are part of what we fund. Morby Method fees are paid upfront by Zelle or wire, as listed in the fee schedule above." }
    ],
    nearby: ["arlington", "haltom-city", "keller"],
    summaryFees: true,
    summarySteps: true,
    scenario: {
      title: "Example: how a Stop Six deal can play out",
      intro: "This is an illustrative example, not a real transaction or a promise of results. It shows the moving parts of a typical east Fort Worth double closing so you can see where each piece fits.",
      items: [
        "You sign a purchase contract on a 1940s cottage in Stop Six at $140,000 with a 21 day closing window.",
        "Your end buyer, a rehabber who works the east side neighborhoods, commits at $195,000 through the same title company.",
        "The title company schedules both files back to back. Transactional funding covers your $140,000 purchase side, so none of your own cash goes into the deal. Title insurance, escrow fees and Tarrant County recording fees appear as their own line items on each side of the file.",
        "Your resale closes right after your purchase. The funding and the {{tier1Rate}} fee from the published schedule come out of the resale proceeds, and the remaining spread is your margin."
      ],
      outro: "The full sequence and the paperwork behind it are covered in how double closing works in Texas, and the fee math is laid out on the transactional funding fees page."
    },
    blurb: "The metro's western engine. Low-dollar east side cottages, mid-century ranch homes in Wedgwood and Ridglea, and revival demand near the Near Southside."
  },
  {
    slug: "arlington",
    name: "Arlington",
    state: "TX",
    stateName: "Texas",
    county: "Tarrant County",
    formName: FORM,
    title: "Double Close Funding in Arlington, TX | Transactional Funding",
    description: "Double close funding for Arlington, TX wholesalers. 1960s through 1980s ranch homes across the mid-cities core. Fees from {{tier1Rate}}.",
    h1Bottom: "in Arlington, Texas",
    hero: "Arlington is the mid-cities core, and its housing stock is one of the metro's great renovation benches. Neighborhoods from the UTA area to the streets around the entertainment district hold 1960s through 1980s ranch homes, many with original kitchens and big lots. Renovated examples resell to first time buyers, university families and commuters splitting the difference between the two downtowns. Entry prices stay accessible, and buyer depth is constant. DFW Wholesale Double Close connects you with transactional funding for Arlington deals. You take title with the funder's money, resell to your end buyer the same day, and your spread stays off a single assignment contract. Submit your Arlington deal through the form and funding can be ready in as little as 24 hours.",
    localNoteTitle: "How double closings work in Arlington",
    localNote: "Texas closings typically run through a title company, and most investor files close with the title company the end buyer already uses. Texas charges no state transfer tax, and title insurance premium rates are set at the state level, so the premium itself does not change between title companies while other fees vary by office. Arlington's older slabs mean foundation questions come up often, and the university area adds rental licensing considerations on some files. Deeds record with the Tarrant County clerk. The title company can confirm anything property specific.",
    whyHeading: "Why Arlington wholesalers use us",
    why: [
      "Arlington's buyer depth is its superpower: students' families, first time buyers, landlords and move up buyers all shop the same renovated ranch homes. A double closing lets you sell into that depth without leaving your own cash in escrow.",
      "We connect you with transactional funding for the purchase side of your deal so you can take title and resell the same day. Your seller sees a clean cash purchase, your buyer sees a normal sale, and your wholesale spread stays between the two closing statements instead of on an assignment contract.",
      "The fee schedule is published on this page and stays flat across every city and county in the metro. You can underwrite the funding cost into your offer before you tie up the property, and there are no surprise charges at the closing table."
    ],
    steps: [
      { title: "Submit your deal", text: "Send the property address, your contract price, the resale price, and the title company handling the file. Ranch homes near UTA and two stories in the southwest both fit the same form." },
      { title: "We review the numbers", text: "The purchase, the resale, and the paperwork get reviewed with the title company. Questions get answered before closing day, not at the table." },
      { title: "Funding closes your purchase", text: "On closing day the funds for your purchase side are wired. Your resale closes right after, the funds and fee come out of the proceeds, and the spread is yours." }
    ],
    faqs: [
      { q: "Do you fund double closings in Arlington?", a: "Yes. Deals across Arlington fit, from the neighborhoods around UTA to the streets near the entertainment district and the newer sections in the southwest. Single family homes and townhouses both work when the numbers do." },
      { q: "What kinds of Arlington properties work for a double closing?", a: "Most Arlington wholesale deals are 1960s through 1980s ranch homes with dated interiors. End buyers renovate them for first time buyers and university-area families, or hold them as rentals near campus and the stadiums." },
      { q: "What is a double closing?", a: "A double closing is two back to back transactions on the same property on the same day. You buy the home from the seller, take title, and immediately resell it to your end buyer. Because you take title in between, your purchase price and your resale price stay on separate closing statements instead of one assignment contract." },
      { q: "How fast can funding be ready?", a: "Funding can be ready in as little as 24 hours once we have the deal details and the title company information. Files with complete paperwork move fastest, so send everything you have when you submit the form." },
      { q: "What does double close funding cost?", a: "Fees follow the schedule on this page: {{tier1Rate}} on deals up to {{tier1Cap}} with a {{tier1Minimum}} minimum, {{tier2Rate}} from {{tier1Cap}} to {{tier2Cap}}, and {{tier3Rate}} from {{tier2Cap}} to {{fundingMax}}. Extra days, a second closing company, or special paperwork carry the additional fees listed in the schedule." },
      { q: "Can you fund EMD or a Morby Method deal?", a: "Yes. Earnest money deposits and Morby Method structures are part of what we fund. Morby Method fees are paid upfront by Zelle or wire, as listed in the fee schedule above." }
    ],
    nearby: ["grand-prairie", "mansfield", "euless"],
    summaryFees: true,
    summarySteps: true,
    scenario: {
      title: "Example: how a mid-cities ranch deal can play out",
      intro: "This is an illustrative example, not a real transaction or a promise of results. It shows the moving parts of a typical Arlington double closing so you can see where each piece fits.",
      items: [
        "You sign a purchase contract on a 1970s ranch home near the UTA area at $255,000 with a 21 day closing window.",
        "Your end buyer, a renovator who resells to first time buyers in the mid-cities, commits at $325,000 through the same title company.",
        "The title company schedules both files back to back. Transactional funding covers your $255,000 purchase side, so none of your own cash goes into the deal. Title insurance, escrow fees and Tarrant County recording fees appear as their own line items on each side of the file.",
        "Your resale closes right after your purchase. The funding and the {{tier1Rate}} fee from the published schedule come out of the resale proceeds, and the remaining spread is your margin."
      ],
      outro: "The full sequence and the paperwork behind it are covered in how double closing works in Texas, and the fee math is laid out on the transactional funding fees page."
    },
    blurb: "The mid-cities core. 1960s through 1980s ranch homes with constant buyer depth from UTA to the entertainment district."
  },
  {
    slug: "mansfield",
    name: "Mansfield",
    state: "TX",
    stateName: "Texas",
    county: "Tarrant County",
    formName: FORM,
    title: "Double Close Funding in Mansfield, TX | Transactional Funding",
    description: "Double close funding for Mansfield, TX wholesalers. Historic downtown to fast-growing subdivisions in southeast Tarrant. Fees from {{tier1Rate}}.",
    h1Bottom: "in Mansfield, Texas",
    hero: "Mansfield has grown from a small farm town into one of southeast Tarrant's busiest suburbs, and its market runs in two bands. The older streets around the historic downtown hold 1960s through 1980s homes at the area's lower price points, while decades of newer subdivisions along Walnut Creek and the US-287 corridor pull move up families. Dated homes in both bands attract renovators whose buyers want the schools and the southern location. DFW Wholesale Double Close connects you with transactional funding for Mansfield deals. You take title with the funder's money, resell to your end buyer the same day, and your markup stays off a single assignment contract. Submit your Mansfield deal through the form and funding can be ready in as little as 24 hours.",
    localNoteTitle: "How double closings work in Mansfield",
    localNote: "Texas closings typically run through a title company, and most investor files close with the title company the end buyer already uses. Texas charges no state transfer tax, and title insurance premium rates are set at the state level, so the premium itself does not change between title companies while other fees vary by office. Mansfield spans Tarrant, Ellis and Johnson counties, so the deed records with the county clerk where the property actually sits. Newer subdivisions usually involve an HOA resale certificate on the file. The title company can confirm the county and anything else property specific.",
    whyHeading: "Why Mansfield wholesalers use us",
    why: [
      "Mansfield's steady family demand gives renovated homes a deep resale bench, and its two price bands let you match deals to different buyer pools. A double closing keeps your capital rotating between both ends of that market.",
      "We connect you with transactional funding for the purchase side of your deal so you can take title and resell the same day. Your seller sees a clean cash purchase, your buyer sees a normal sale, and your wholesale spread stays between the two closing statements instead of on an assignment contract.",
      "The fee schedule is published on this page and stays flat across every city and county in the metro. You can underwrite the funding cost into your offer before you tie up the property, and there are no surprise charges at the closing table."
    ],
    steps: [
      { title: "Submit your deal", text: "Send the property address, your contract price, the resale price, and the title company handling the file. Downtown-area homes and Walnut Creek subdivisions both fit the same form." },
      { title: "We review the numbers", text: "The purchase, the resale, and the paperwork get reviewed with the title company. Questions get answered before closing day, not at the table." },
      { title: "Funding closes your purchase", text: "On closing day the funds for your purchase side are wired. Your resale closes right after, the funds and fee come out of the proceeds, and the spread is yours." }
    ],
    faqs: [
      { q: "Do you fund double closings in Mansfield?", a: "Yes. Deals across Mansfield fit, from the older streets near the historic downtown to the newer subdivisions along US-287 and Walnut Creek. Single family homes work when the numbers do." },
      { q: "What kinds of Mansfield properties work for a double closing?", a: "Most Mansfield wholesale deals are 1960s through 2000s single family homes with dated interiors. End buyers renovate them for families drawn to the schools and the southeast Tarrant location." },
      { q: "What is a double closing?", a: "A double closing is two back to back transactions on the same property on the same day. You buy the home from the seller, take title, and immediately resell it to your end buyer. Because you take title in between, your purchase price and your resale price stay on separate closing statements instead of one assignment contract." },
      { q: "How fast can funding be ready?", a: "Funding can be ready in as little as 24 hours once we have the deal details and the title company information. Files with complete paperwork move fastest, so send everything you have when you submit the form." },
      { q: "What does double close funding cost?", a: "Fees follow the schedule on this page: {{tier1Rate}} on deals up to {{tier1Cap}} with a {{tier1Minimum}} minimum, {{tier2Rate}} from {{tier1Cap}} to {{tier2Cap}}, and {{tier3Rate}} from {{tier2Cap}} to {{fundingMax}}. Extra days, a second closing company, or special paperwork carry the additional fees listed in the schedule." },
      { q: "Can you fund EMD or a Morby Method deal?", a: "Yes. Earnest money deposits and Morby Method structures are part of what we fund. Morby Method fees are paid upfront by Zelle or wire, as listed in the fee schedule above." }
    ],
    nearby: ["arlington", "burleson", "midlothian"],
    blurb: "Farm town turned family suburb. Two price bands from the historic downtown to the US-287 corridor."
  },
  {
    slug: "north-richland-hills",
    name: "North Richland Hills",
    state: "TX",
    stateName: "Texas",
    county: "Tarrant County",
    formName: FORM,
    title: "Double Close Funding in North Richland Hills, TX | Transactional Funding",
    description: "Double close funding for North Richland Hills wholesalers. 1960s through 1980s ranch homes in the northeast mid-cities. Fees from {{tier1Rate}}.",
    h1Bottom: "in North Richland Hills, Texas",
    hero: "North Richland Hills is the largest of the northeast mid-cities, and its neighborhoods are a renovation buyer's home turf. Streets near Iron Horse and Loop 820 hold 1960s through 1980s ranch homes on mature lots, many ready for their first real update. Renovated examples resell to families who want established trees and mid-cities access without moving further out, and landlords work the same stock for the corridor's renters. DFW Wholesale Double Close connects you with transactional funding for North Richland Hills deals. You take title with the funder's money, resell to your end buyer the same day, and your spread stays off a single assignment contract. Submit your deal through the form and funding can be ready in as little as 24 hours.",
    localNoteTitle: "How double closings work in North Richland Hills",
    localNote: "Texas closings typically run through a title company, and most investor files close with the title company the end buyer already uses. Texas charges no state transfer tax, and title insurance premium rates are set at the state level, so the premium itself does not change between title companies while other fees vary by office. The city's older slabs and cast iron plumbing come up regularly in buyer inspections. Deeds record with the Tarrant County clerk. The title company can confirm anything property specific.",
    whyHeading: "Why North Richland Hills wholesalers use us",
    why: [
      "North Richland Hills offers repeatable product: the same ranch plans across dozens of streets, with resale comps a renovator can trust. A double closing keeps your side just as repeatable, funded purchase and resale in one day.",
      "We connect you with transactional funding for the purchase side of your deal so you can take title and resell the same day. Your seller sees a clean cash purchase, your buyer sees a normal sale, and your wholesale spread stays between the two closing statements instead of on an assignment contract.",
      "The fee schedule is published on this page and stays flat across every city and county in the metro. You can underwrite the funding cost into your offer before you tie up the property, and there are no surprise charges at the closing table."
    ],
    steps: [
      { title: "Submit your deal", text: "Send the property address, your contract price, the resale price, and the title company handling the file. Ranch homes near Iron Horse and Loop 820 both fit the same form." },
      { title: "We review the numbers", text: "The purchase, the resale, and the paperwork get reviewed with the title company. Questions get answered before closing day, not at the table." },
      { title: "Funding closes your purchase", text: "On closing day the funds for your purchase side are wired. Your resale closes right after, the funds and fee come out of the proceeds, and the spread is yours." }
    ],
    faqs: [
      { q: "Do you fund double closings in North Richland Hills?", a: "Yes. Deals across the city fit, from the neighborhoods near Iron Horse to the streets along Loop 820 and Rufe Snow. Single family homes and townhouses both work when the numbers do." },
      { q: "What kinds of North Richland Hills properties work for a double closing?", a: "Most wholesale deals here are 1960s through 1980s ranch homes with dated interiors on mature lots. End buyers renovate them for families and commuters, or hold them as rentals for the mid-cities workforce." },
      { q: "What is a double closing?", a: "A double closing is two back to back transactions on the same property on the same day. You buy the home from the seller, take title, and immediately resell it to your end buyer. Because you take title in between, your purchase price and your resale price stay on separate closing statements instead of one assignment contract." },
      { q: "How fast can funding be ready?", a: "Funding can be ready in as little as 24 hours once we have the deal details and the title company information. Files with complete paperwork move fastest, so send everything you have when you submit the form." },
      { q: "What does double close funding cost?", a: "Fees follow the schedule on this page: {{tier1Rate}} on deals up to {{tier1Cap}} with a {{tier1Minimum}} minimum, {{tier2Rate}} from {{tier1Cap}} to {{tier2Cap}}, and {{tier3Rate}} from {{tier2Cap}} to {{fundingMax}}. Extra days, a second closing company, or special paperwork carry the additional fees listed in the schedule." },
      { q: "Can you fund EMD or a Morby Method deal?", a: "Yes. Earnest money deposits and Morby Method structures are part of what we fund. Morby Method fees are paid upfront by Zelle or wire, as listed in the fee schedule above." }
    ],
    nearby: ["hurst", "haltom-city", "keller"],
    blurb: "The largest northeast mid-city. Repeatable ranch product on mature lots that renovators underwrite with confidence."
  },
  {
    slug: "euless",
    name: "Euless",
    state: "TX",
    stateName: "Texas",
    county: "Tarrant County",
    formName: FORM,
    title: "Double Close Funding in Euless, TX | Transactional Funding",
    description: "Double close funding for Euless, TX wholesalers. 1960s through 1980s homes next to DFW Airport. Fees from {{tier1Rate}}.",
    h1Bottom: "in Euless, Texas",
    hero: "Euless sits directly south of DFW Airport, and that location drives everything about its market. The city's 1960s through 1980s homes draw renovators whose buyers work at the airport and along the surrounding logistics and office corridors. Bear Creek and the older streets near Midway Park hold the classic renovation stock, and rental demand from airport workers gives landlords a second exit on the same houses. DFW Wholesale Double Close connects you with transactional funding for Euless deals. You take title with the funder's money, resell to your end buyer the same day, and your markup stays off a single assignment contract. Submit your Euless deal through the form and funding can be ready in as little as 24 hours.",
    localNoteTitle: "How double closings work in Euless",
    localNote: "Texas closings typically run through a title company, and most investor files close with the title company the end buyer already uses. Texas charges no state transfer tax, and title insurance premium rates are set at the state level, so the premium itself does not change between title companies while other fees vary by office. Homes under the airport flight paths come with noise disclosure questions on some files. Deeds record with the Tarrant County clerk. The title company can confirm anything property specific.",
    whyHeading: "Why Euless wholesalers use us",
    why: [
      "Euless gives every deal two exits: flip to an airport-corridor buyer or sell to a landlord building a rental portfolio near the terminals. A double closing keeps both paths open without your own cash committed between contracts.",
      "We connect you with transactional funding for the purchase side of your deal so you can take title and resell the same day. Your seller sees a clean cash purchase, your buyer sees a normal sale, and your wholesale spread stays between the two closing statements instead of on an assignment contract.",
      "The fee schedule is published on this page and stays flat across every city and county in the metro. You can underwrite the funding cost into your offer before you tie up the property, and there are no surprise charges at the closing table."
    ],
    steps: [
      { title: "Submit your deal", text: "Send the property address, your contract price, the resale price, and the title company handling the file. Homes near Bear Creek and the Midway Park area both fit the same form." },
      { title: "We review the numbers", text: "The purchase, the resale, and the paperwork get reviewed with the title company. Questions get answered before closing day, not at the table." },
      { title: "Funding closes your purchase", text: "On closing day the funds for your purchase side are wired. Your resale closes right after, the funds and fee come out of the proceeds, and the spread is yours." }
    ],
    faqs: [
      { q: "Do you fund double closings in Euless?", a: "Yes. Deals across Euless fit, from the older streets near Bear Creek and Midway Park to the neighborhoods along Euless Boulevard and 157. Single family homes and townhouses both work when the numbers do." },
      { q: "What kinds of Euless properties work for a double closing?", a: "Most Euless wholesale deals are 1960s through 1980s single family homes with dated interiors. End buyers renovate them for airport-corridor workers or hold them as rentals for the same employment base." },
      { q: "What is a double closing?", a: "A double closing is two back to back transactions on the same property on the same day. You buy the home from the seller, take title, and immediately resell it to your end buyer. Because you take title in between, your purchase price and your resale price stay on separate closing statements instead of one assignment contract." },
      { q: "How fast can funding be ready?", a: "Funding can be ready in as little as 24 hours once we have the deal details and the title company information. Files with complete paperwork move fastest, so send everything you have when you submit the form." },
      { q: "What does double close funding cost?", a: "Fees follow the schedule on this page: {{tier1Rate}} on deals up to {{tier1Cap}} with a {{tier1Minimum}} minimum, {{tier2Rate}} from {{tier1Cap}} to {{tier2Cap}}, and {{tier3Rate}} from {{tier2Cap}} to {{fundingMax}}. Extra days, a second closing company, or special paperwork carry the additional fees listed in the schedule." },
      { q: "Can you fund EMD or a Morby Method deal?", a: "Yes. Earnest money deposits and Morby Method structures are part of what we fund. Morby Method fees are paid upfront by Zelle or wire, as listed in the fee schedule above." }
    ],
    nearby: ["bedford", "hurst", "coppell"],
    blurb: "Directly south of DFW Airport. 1960s through 1980s homes with a flip exit and a landlord exit on the same street."
  },
  {
    slug: "grapevine",
    name: "Grapevine",
    state: "TX",
    stateName: "Texas",
    county: "Tarrant County",
    formName: FORM,
    title: "Double Close Funding in Grapevine, TX | Transactional Funding",
    description: "Double close funding for Grapevine, TX wholesalers. Historic Main Street cottages to lakeside neighborhoods. Fees from {{tier1Rate}}.",
    h1Bottom: "in Grapevine, Texas",
    hero: "Grapevine holds some of the northeast metro's most distinctive housing stock. The streets around its historic Main Street carry early century cottages, the neighborhoods between downtown and Lake Grapevine add 1960s through 1980s ranch homes, and everything sits minutes from DFW Airport's job base. Dated homes here attract renovators whose buyers pay up for the historic core and the lake, so spreads reward careful contracts. DFW Wholesale Double Close connects you with transactional funding for Grapevine deals. You take title with the funder's money, resell to your end buyer the same day, and your spread stays off a single assignment contract. Submit your Grapevine deal through the form and funding can be ready in as little as 24 hours.",
    localNoteTitle: "How double closings work in Grapevine",
    localNote: "Texas closings typically run through a title company, and most investor files close with the title company the end buyer already uses. Texas charges no state transfer tax, and title insurance premium rates are set at the state level, so the premium itself does not change between title companies while other fees vary by office. Homes in Grapevine's historic districts carry design guidelines for exterior changes, and lake-adjacent properties can bring flood plain questions. Deeds record with the Tarrant County clerk. The title company can confirm anything property specific.",
    whyHeading: "Why Grapevine wholesalers use us",
    why: [
      "Grapevine's historic core and lake access give renovated homes a resale story most suburbs cannot match. A double closing lets you capture that premium while keeping your own cash free for the next contract.",
      "We connect you with transactional funding for the purchase side of your deal so you can take title and resell the same day. Your seller sees a clean cash purchase, your buyer sees a normal sale, and your wholesale spread stays between the two closing statements instead of on an assignment contract.",
      "The fee schedule is published on this page and stays flat across every city and county in the metro. You can underwrite the funding cost into your offer before you tie up the property, and there are no surprise charges at the closing table."
    ],
    steps: [
      { title: "Submit your deal", text: "Send the property address, your contract price, the resale price, and the title company handling the file. Main Street cottages and ranch homes near the lake both fit the same form." },
      { title: "We review the numbers", text: "The purchase, the resale, and the paperwork get reviewed with the title company. Questions get answered before closing day, not at the table." },
      { title: "Funding closes your purchase", text: "On closing day the funds for your purchase side are wired. Your resale closes right after, the funds and fee come out of the proceeds, and the spread is yours." }
    ],
    faqs: [
      { q: "Do you fund double closings in Grapevine?", a: "Yes. Deals across Grapevine fit, from the historic streets around Main Street to the neighborhoods between downtown and Lake Grapevine. Single family homes and townhouses both work when the numbers do." },
      { q: "What kinds of Grapevine properties work for a double closing?", a: "Most Grapevine wholesale deals are early century cottages and 1960s through 1980s ranch homes with dated interiors. End buyers renovate them for buyers who pay a premium for the historic core and the lake." },
      { q: "What is a double closing?", a: "A double closing is two back to back transactions on the same property on the same day. You buy the home from the seller, take title, and immediately resell it to your end buyer. Because you take title in between, your purchase price and your resale price stay on separate closing statements instead of one assignment contract." },
      { q: "How fast can funding be ready?", a: "Funding can be ready in as little as 24 hours once we have the deal details and the title company information. Files with complete paperwork move fastest, so send everything you have when you submit the form." },
      { q: "What does double close funding cost?", a: "Fees follow the schedule on this page: {{tier1Rate}} on deals up to {{tier1Cap}} with a {{tier1Minimum}} minimum, {{tier2Rate}} from {{tier1Cap}} to {{tier2Cap}}, and {{tier3Rate}} from {{tier2Cap}} to {{fundingMax}}. Extra days, a second closing company, or special paperwork carry the additional fees listed in the schedule." },
      { q: "Can you fund EMD or a Morby Method deal?", a: "Yes. Earnest money deposits and Morby Method structures are part of what we fund. Morby Method fees are paid upfront by Zelle or wire, as listed in the fee schedule above." }
    ],
    nearby: ["coppell", "euless", "southlake"],
    blurb: "Historic Main Street cottages and lakeside ranch homes minutes from the airport job base."
  },
  {
    slug: "bedford",
    name: "Bedford",
    state: "TX",
    stateName: "Texas",
    county: "Tarrant County",
    formName: FORM,
    title: "Double Close Funding in Bedford, TX | Transactional Funding",
    description: "Double close funding for Bedford, TX wholesalers. 1970s through 1990s homes in the heart of the mid-cities. Fees from {{tier1Rate}}.",
    h1Bottom: "in Bedford, Texas",
    hero: "Bedford sits at the center of the mid-cities, and its housing stock fits the renovation model neatly. Most of the city was built in the 1970s through 1990s, so its streets are full of brick homes now due for their first major update. Renovated examples resell to families who want the central location and the established canopy without paying Southlake or Colleyville prices. DFW Wholesale Double Close connects you with transactional funding for Bedford deals. You take title with the funder's money, resell to your end buyer the same day, and your markup stays off a single assignment contract. Submit your Bedford deal through the form and funding can be ready in as little as 24 hours.",
    localNoteTitle: "How double closings work in Bedford",
    localNote: "Texas closings typically run through a title company, and most investor files close with the title company the end buyer already uses. Texas charges no state transfer tax, and title insurance premium rates are set at the state level, so the premium itself does not change between title companies while other fees vary by office. Bedford's housing stock is heavily slab-on-grade, so foundation and plumbing questions come up regularly on inspections. Deeds record with the Tarrant County clerk. The title company can confirm anything property specific.",
    whyHeading: "Why Bedford wholesalers use us",
    why: [
      "Bedford's uniform housing stock makes comps easy and buyer expectations clear, which shortens every resale timeline. A double closing compresses your side of the deal to the same day, so your capital never sits idle between transactions.",
      "We connect you with transactional funding for the purchase side of your deal so you can take title and resell the same day. Your seller sees a clean cash purchase, your buyer sees a normal sale, and your wholesale spread stays between the two closing statements instead of on an assignment contract.",
      "The fee schedule is published on this page and stays flat across every city and county in the metro. You can underwrite the funding cost into your offer before you tie up the property, and there are no surprise charges at the closing table."
    ],
    steps: [
      { title: "Submit your deal", text: "Send the property address, your contract price, the resale price, and the title company handling the file. Brick homes near Generations Park and the 183 corridor both fit the same form." },
      { title: "We review the numbers", text: "The purchase, the resale, and the paperwork get reviewed with the title company. Questions get answered before closing day, not at the table." },
      { title: "Funding closes your purchase", text: "On closing day the funds for your purchase side are wired. Your resale closes right after, the funds and fee come out of the proceeds, and the spread is yours." }
    ],
    faqs: [
      { q: "Do you fund double closings in Bedford?", a: "Yes. Deals across Bedford fit, from the neighborhoods near Generations Park to the streets along Airport Freeway and Brown Trail. Single family homes and townhouses both work when the numbers do." },
      { q: "What kinds of Bedford properties work for a double closing?", a: "Most Bedford wholesale deals are 1970s through 1990s brick homes with dated interiors. End buyers renovate them for families who want the central mid-cities location and the established trees." },
      { q: "What is a double closing?", a: "A double closing is two back to back transactions on the same property on the same day. You buy the home from the seller, take title, and immediately resell it to your end buyer. Because you take title in between, your purchase price and your resale price stay on separate closing statements instead of one assignment contract." },
      { q: "How fast can funding be ready?", a: "Funding can be ready in as little as 24 hours once we have the deal details and the title company information. Files with complete paperwork move fastest, so send everything you have when you submit the form." },
      { q: "What does double close funding cost?", a: "Fees follow the schedule on this page: {{tier1Rate}} on deals up to {{tier1Cap}} with a {{tier1Minimum}} minimum, {{tier2Rate}} from {{tier1Cap}} to {{tier2Cap}}, and {{tier3Rate}} from {{tier2Cap}} to {{fundingMax}}. Extra days, a second closing company, or special paperwork carry the additional fees listed in the schedule." },
      { q: "Can you fund EMD or a Morby Method deal?", a: "Yes. Earnest money deposits and Morby Method structures are part of what we fund. Morby Method fees are paid upfront by Zelle or wire, as listed in the fee schedule above." }
    ],
    nearby: ["euless", "hurst", "north-richland-hills"],
    blurb: "The center of the mid-cities. 1970s through 1990s brick homes reselling to families priced out of Southlake."
  },
  {
    slug: "keller",
    name: "Keller",
    state: "TX",
    stateName: "Texas",
    county: "Tarrant County",
    formName: FORM,
    title: "Double Close Funding in Keller, TX | Transactional Funding",
    description: "Double close funding for Keller, TX wholesalers. 1980s through 2010s homes around Big Bear Creek and Old Town. Fees from {{tier1Rate}}.",
    h1Bottom: "in Keller, Texas",
    hero: "Keller built its name on family demand, and its market reflects it. The city is mostly 1980s through 2010s subdivisions around Big Bear Creek and Old Town Keller, with older streets near the original townsite offering the rare dated home at a lower basis. When dated homes hit the market here, renovators chase them because the resale audience is deep: families trading up for the schools and the parks. DFW Wholesale Double Close connects you with transactional funding for Keller deals. You take title with the funder's money, resell to your end buyer the same day, and your spread stays off a single assignment contract. Submit your Keller deal through the form and funding can be ready in as little as 24 hours.",
    localNoteTitle: "How double closings work in Keller",
    localNote: "Texas closings typically run through a title company, and most investor files close with the title company the end buyer already uses. Texas charges no state transfer tax, and title insurance premium rates are set at the state level, so the premium itself does not change between title companies while other fees vary by office. Keller's subdivisions usually involve an HOA resale certificate on the file. Deeds record with the Tarrant County clerk. The title company can confirm anything property specific.",
    whyHeading: "Why Keller wholesalers use us",
    why: [
      "Keller deals are scarcer and higher-dollar, so the winners are the wholesalers who can perform when one surfaces. A double closing puts funded certainty behind your purchase side, letting you close and resell the same day without draining your reserves.",
      "We connect you with transactional funding for the purchase side of your deal so you can take title and resell the same day. Your seller sees a clean cash purchase, your buyer sees a normal sale, and your wholesale spread stays between the two closing statements instead of on an assignment contract.",
      "The fee schedule is published on this page and stays flat across every city and county in the metro. You can underwrite the funding cost into your offer before you tie up the property, and there are no surprise charges at the closing table."
    ],
    steps: [
      { title: "Submit your deal", text: "Send the property address, your contract price, the resale price, and the title company handling the file. Old Town homes and Big Bear Creek subdivisions both fit the same form." },
      { title: "We review the numbers", text: "The purchase, the resale, and the paperwork get reviewed with the title company. Questions get answered before closing day, not at the table." },
      { title: "Funding closes your purchase", text: "On closing day the funds for your purchase side are wired. Your resale closes right after, the funds and fee come out of the proceeds, and the spread is yours." }
    ],
    faqs: [
      { q: "Do you fund double closings in Keller?", a: "Yes. Deals across Keller fit, from the older streets near Old Town Keller to the subdivisions along Big Bear Creek and Keller Parkway. Single family homes work when the numbers do." },
      { q: "What kinds of Keller properties work for a double closing?", a: "Most Keller wholesale deals are 1980s through 2000s single family homes with dated interiors, plus occasional older properties near the original townsite. End buyers renovate them for families trading up for the schools and parks." },
      { q: "What is a double closing?", a: "A double closing is two back to back transactions on the same property on the same day. You buy the home from the seller, take title, and immediately resell it to your end buyer. Because you take title in between, your purchase price and your resale price stay on separate closing statements instead of one assignment contract." },
      { q: "How fast can funding be ready?", a: "Funding can be ready in as little as 24 hours once we have the deal details and the title company information. Files with complete paperwork move fastest, so send everything you have when you submit the form." },
      { q: "What does double close funding cost?", a: "Fees follow the schedule on this page: {{tier1Rate}} on deals up to {{tier1Cap}} with a {{tier1Minimum}} minimum, {{tier2Rate}} from {{tier1Cap}} to {{tier2Cap}}, and {{tier3Rate}} from {{tier2Cap}} to {{fundingMax}}. Extra days, a second closing company, or special paperwork carry the additional fees listed in the schedule." },
      { q: "Can you fund EMD or a Morby Method deal?", a: "Yes. Earnest money deposits and Morby Method structures are part of what we fund. Morby Method fees are paid upfront by Zelle or wire, as listed in the fee schedule above." }
    ],
    nearby: ["north-richland-hills", "southlake", "fort-worth"],
    blurb: "Family-demand suburb around Big Bear Creek and Old Town. Scarcer, higher-dollar deals with a deep resale bench."
  },
  {
    slug: "haltom-city",
    name: "Haltom City",
    state: "TX",
    stateName: "Texas",
    county: "Tarrant County",
    formName: FORM,
    title: "Double Close Funding in Haltom City, TX | Transactional Funding",
    description: "Double close funding for Haltom City, TX wholesalers. 1950s through 1970s starter homes off Denton Highway. Fees from {{tier1Rate}}.",
    h1Bottom: "in Haltom City, Texas",
    hero: "Haltom City is one of the northeast metro's workhorse investor markets. Its streets are lined with 1950s through 1970s starter homes at some of Tarrant County's lowest entry prices, and the Denton Highway and Beach Street corridors keep contractors and renters close. Renovated homes resell to first time buyers, and the same streets give landlords steady rental demand. That two-way market is why investor buyers work the city constantly. DFW Wholesale Double Close connects you with transactional funding for Haltom City deals. You take title with the funder's money, resell to your end buyer the same day, and your markup stays off a single assignment contract. Submit your deal through the form and funding can be ready in as little as 24 hours.",
    localNoteTitle: "How double closings work in Haltom City",
    localNote: "Texas closings typically run through a title company, and most investor files close with the title company the end buyer already uses. Texas charges no state transfer tax, and title insurance premium rates are set at the state level, so the premium itself does not change between title companies while other fees vary by office. The city's older pier and beam and slab homes often carry foundation histories, and many files involve estate or landlord-owned properties. Deeds record with the Tarrant County clerk. The title company can confirm anything property specific.",
    whyHeading: "Why Haltom City wholesalers use us",
    why: [
      "Haltom City is a volume play: low entry prices, constant investor demand and two exits on every street. A double closing lets you run that volume without your own cash stacked up across multiple purchases.",
      "We connect you with transactional funding for the purchase side of your deal so you can take title and resell the same day. Your seller sees a clean cash purchase, your buyer sees a normal sale, and your wholesale spread stays between the two closing statements instead of on an assignment contract.",
      "The fee schedule is published on this page and stays flat across every city and county in the metro. You can underwrite the funding cost into your offer before you tie up the property, and there are no surprise charges at the closing table."
    ],
    steps: [
      { title: "Submit your deal", text: "Send the property address, your contract price, the resale price, and the title company handling the file. Starter homes off Denton Highway and Beach Street both fit the same form." },
      { title: "We review the numbers", text: "The purchase, the resale, and the paperwork get reviewed with the title company. Questions get answered before closing day, not at the table." },
      { title: "Funding closes your purchase", text: "On closing day the funds for your purchase side are wired. Your resale closes right after, the funds and fee come out of the proceeds, and the spread is yours." }
    ],
    faqs: [
      { q: "Do you fund double closings in Haltom City?", a: "Yes. Deals across Haltom City fit, from the streets off Denton Highway to the neighborhoods along Beach Street and Belknap. Single family homes work when the numbers do." },
      { q: "What kinds of Haltom City properties work for a double closing?", a: "Most Haltom City wholesale deals are 1950s through 1970s starter homes with dated interiors. End buyers renovate them for first time buyers or hold them as rentals for the northeast Tarrant workforce." },
      { q: "What is a double closing?", a: "A double closing is two back to back transactions on the same property on the same day. You buy the home from the seller, take title, and immediately resell it to your end buyer. Because you take title in between, your purchase price and your resale price stay on separate closing statements instead of one assignment contract." },
      { q: "How fast can funding be ready?", a: "Funding can be ready in as little as 24 hours once we have the deal details and the title company information. Files with complete paperwork move fastest, so send everything you have when you submit the form." },
      { q: "What does double close funding cost?", a: "Fees follow the schedule on this page: {{tier1Rate}} on deals up to {{tier1Cap}} with a {{tier1Minimum}} minimum, {{tier2Rate}} from {{tier1Cap}} to {{tier2Cap}}, and {{tier3Rate}} from {{tier2Cap}} to {{fundingMax}}. Extra days, a second closing company, or special paperwork carry the additional fees listed in the schedule." },
      { q: "Can you fund EMD or a Morby Method deal?", a: "Yes. Earnest money deposits and Morby Method structures are part of what we fund. Morby Method fees are paid upfront by Zelle or wire, as listed in the fee schedule above." }
    ],
    nearby: ["north-richland-hills", "fort-worth", "hurst"],
    blurb: "A workhorse investor market. Low-priced starter homes with a flip exit and a rental exit on every street."
  },
  {
    slug: "hurst",
    name: "Hurst",
    state: "TX",
    stateName: "Texas",
    county: "Tarrant County",
    formName: FORM,
    title: "Double Close Funding in Hurst, TX | Transactional Funding",
    description: "Double close funding for Hurst, TX wholesalers. 1960s through 1980s homes near the North East Mall corridor. Fees from {{tier1Rate}}.",
    h1Bottom: "in Hurst, Texas",
    hero: "Hurst packs classic mid-cities renovation stock into a tight footprint. The neighborhoods around the North East Mall corridor and Pipeline Road hold 1960s through 1980s ranch homes and split levels, and renovated examples resell to buyers who want the mid-cities location with quick access to both downtowns. The city's mature trees and established streets give renovated homes strong curb appeal without premium lot prices. DFW Wholesale Double Close connects you with transactional funding for Hurst deals. You take title with the funder's money, resell to your end buyer the same day, and your spread stays off a single assignment contract. Submit your Hurst deal through the form and funding can be ready in as little as 24 hours.",
    localNoteTitle: "How double closings work in Hurst",
    localNote: "Texas closings typically run through a title company, and most investor files close with the title company the end buyer already uses. Texas charges no state transfer tax, and title insurance premium rates are set at the state level, so the premium itself does not change between title companies while other fees vary by office. Hurst's older slabs mean foundation and sewer line questions come up often in buyer inspections. Deeds record with the Tarrant County clerk. The title company can confirm anything property specific.",
    whyHeading: "Why Hurst wholesalers use us",
    why: [
      "Hurst's central mid-cities location gives renovated homes a wide resale audience from both downtowns. A double closing lets you sell into that audience while keeping your own capital free for the next contract.",
      "We connect you with transactional funding for the purchase side of your deal so you can take title and resell the same day. Your seller sees a clean cash purchase, your buyer sees a normal sale, and your wholesale spread stays between the two closing statements instead of on an assignment contract.",
      "The fee schedule is published on this page and stays flat across every city and county in the metro. You can underwrite the funding cost into your offer before you tie up the property, and there are no surprise charges at the closing table."
    ],
    steps: [
      { title: "Submit your deal", text: "Send the property address, your contract price, the resale price, and the title company handling the file. Ranch homes near Pipeline Road and the mall corridor both fit the same form." },
      { title: "We review the numbers", text: "The purchase, the resale, and the paperwork get reviewed with the title company. Questions get answered before closing day, not at the table." },
      { title: "Funding closes your purchase", text: "On closing day the funds for your purchase side are wired. Your resale closes right after, the funds and fee come out of the proceeds, and the spread is yours." }
    ],
    faqs: [
      { q: "Do you fund double closings in Hurst?", a: "Yes. Deals across Hurst fit, from the neighborhoods around the North East Mall corridor to the streets along Pipeline Road and Precinct Line. Single family homes work when the numbers do." },
      { q: "What kinds of Hurst properties work for a double closing?", a: "Most Hurst wholesale deals are 1960s through 1980s ranch homes and split levels with dated interiors. End buyers renovate them for buyers who want the mid-cities location and mature streets." },
      { q: "What is a double closing?", a: "A double closing is two back to back transactions on the same property on the same day. You buy the home from the seller, take title, and immediately resell it to your end buyer. Because you take title in between, your purchase price and your resale price stay on separate closing statements instead of one assignment contract." },
      { q: "How fast can funding be ready?", a: "Funding can be ready in as little as 24 hours once we have the deal details and the title company information. Files with complete paperwork move fastest, so send everything you have when you submit the form." },
      { q: "What does double close funding cost?", a: "Fees follow the schedule on this page: {{tier1Rate}} on deals up to {{tier1Cap}} with a {{tier1Minimum}} minimum, {{tier2Rate}} from {{tier1Cap}} to {{tier2Cap}}, and {{tier3Rate}} from {{tier2Cap}} to {{fundingMax}}. Extra days, a second closing company, or special paperwork carry the additional fees listed in the schedule." },
      { q: "Can you fund EMD or a Morby Method deal?", a: "Yes. Earnest money deposits and Morby Method structures are part of what we fund. Morby Method fees are paid upfront by Zelle or wire, as listed in the fee schedule above." }
    ],
    nearby: ["bedford", "euless", "north-richland-hills"],
    blurb: "Tight mid-cities footprint, classic stock. Ranch homes and split levels reselling to both-downtown commuters."
  },
  {
    slug: "southlake",
    name: "Southlake",
    state: "TX",
    stateName: "Texas",
    county: "Tarrant County",
    formName: FORM,
    title: "Double Close Funding in Southlake, TX | Transactional Funding",
    description: "Double close funding for Southlake, TX wholesalers. 1980s through 2010s estate lots near Town Square. Fees from {{tier1Rate}}.",
    h1Bottom: "in Southlake, Texas",
    hero: "Southlake is the northeast metro's prestige market, built mostly from the 1980s onward on larger lots around Southlake Town Square. Wholesale deals here are rare but real: estate sales, relocations and dated 1980s and 1990s homes that need updating in a city where buyers pay for the address and the schools. When one surfaces, the spread can be substantial, and so can the purchase price. DFW Wholesale Double Close connects you with transactional funding for Southlake deals. You take title with the funder's money, resell to your end buyer the same day, and your markup stays off a single assignment contract. Submit your Southlake deal through the form and funding can be ready in as little as 24 hours.",
    localNoteTitle: "How double closings work in Southlake",
    localNote: "Texas closings typically run through a title company, and most investor files close with the title company the end buyer already uses. Texas charges no state transfer tax, and title insurance premium rates are set at the state level, so the premium itself does not change between title companies while other fees vary by office. Southlake's larger lots and custom homes can involve well, septic or survey questions, and most subdivisions carry an HOA resale certificate. Deeds record with the Tarrant County clerk. The title company can confirm anything property specific.",
    whyHeading: "Why Southlake wholesalers use us",
    why: [
      "Southlake deals carry the metro's higher purchase prices, which makes keeping your own cash out of the middle the whole game. A double closing funds the purchase side so a seven-figure spread never requires a seven-figure bank account.",
      "We connect you with transactional funding for the purchase side of your deal so you can take title and resell the same day. Your seller sees a clean cash purchase, your buyer sees a normal sale, and your wholesale spread stays between the two closing statements instead of on an assignment contract.",
      "The fee schedule is published on this page and stays flat across every city and county in the metro. You can underwrite the funding cost into your offer before you tie up the property, and there are no surprise charges at the closing table."
    ],
    steps: [
      { title: "Submit your deal", text: "Send the property address, your contract price, the resale price, and the title company handling the file. Estate-sale homes and dated 1990s builds both fit the same form." },
      { title: "We review the numbers", text: "The purchase, the resale, and the paperwork get reviewed with the title company. Questions get answered before closing day, not at the table." },
      { title: "Funding closes your purchase", text: "On closing day the funds for your purchase side are wired. Your resale closes right after, the funds and fee come out of the proceeds, and the spread is yours." }
    ],
    faqs: [
      { q: "Do you fund double closings in Southlake?", a: "Yes. Deals across Southlake fit, from the older sections near the original townsite to the estate neighborhoods around Town Square and the Carroll school corridor. Single family homes work when the numbers do." },
      { q: "What kinds of Southlake properties work for a double closing?", a: "Most Southlake wholesale deals are 1980s through 2000s homes with dated interiors, often from estates or relocations. End buyers renovate them for buyers paying for the address, the schools and the larger lots." },
      { q: "What is a double closing?", a: "A double closing is two back to back transactions on the same property on the same day. You buy the home from the seller, take title, and immediately resell it to your end buyer. Because you take title in between, your purchase price and your resale price stay on separate closing statements instead of one assignment contract." },
      { q: "How fast can funding be ready?", a: "Funding can be ready in as little as 24 hours once we have the deal details and the title company information. Files with complete paperwork move fastest, so send everything you have when you submit the form." },
      { q: "What does double close funding cost?", a: "Fees follow the schedule on this page: {{tier1Rate}} on deals up to {{tier1Cap}} with a {{tier1Minimum}} minimum, {{tier2Rate}} from {{tier1Cap}} to {{tier2Cap}}, and {{tier3Rate}} from {{tier2Cap}} to {{fundingMax}}. Extra days, a second closing company, or special paperwork carry the additional fees listed in the schedule." },
      { q: "Can you fund EMD or a Morby Method deal?", a: "Yes. Earnest money deposits and Morby Method structures are part of what we fund. Morby Method fees are paid upfront by Zelle or wire, as listed in the fee schedule above." }
    ],
    nearby: ["keller", "grapevine", "coppell"],
    blurb: "The prestige market. Rare but substantial estate and relocation deals on larger lots near Town Square."
  },
  {
    slug: "plano",
    name: "Plano",
    state: "TX",
    stateName: "Texas",
    county: "Collin County",
    formName: FORM,
    title: "Double Close Funding in Plano, TX | Transactional Funding for Wholesalers",
    description: "Double close funding for Plano, TX wholesalers. 1970s through 1990s brick homes from east Plano to the Legacy corridor. Fees from {{tier1Rate}}.",
    h1Bottom: "in Plano, Texas",
    hero: "Plano's wholesale market lives in its age. East Plano and the neighborhoods built along US-75 in the 1970s and 1980s hold brick ranch homes with dated interiors, while the western sections near the Legacy corridor run newer and pricier. The older stock attracts renovators whose buyers pay for the schools, the job centers along the corridor and the central Collin County location. Entry prices require disciplined contracts, but the resale bench is deep. DFW Wholesale Double Close connects you with transactional funding for Plano deals. You take title with the funder's money, resell to your end buyer the same day, and your spread stays off a single assignment contract. Submit your Plano deal through the form and funding can be ready in as little as 24 hours.",
    localNoteTitle: "How double closings work in Plano",
    localNote: "Texas closings typically run through a title company, and most investor files close with the title company the end buyer already uses. Texas charges no state transfer tax, and title insurance premium rates are set at the state level, so the premium itself does not change between title companies while other fees vary by office. Plano's 1970s and 1980s slabs mean foundation questions come up regularly, and most subdivisions carry an HOA resale certificate. Deeds record with the Collin County clerk. The title company can confirm anything property specific.",
    whyHeading: "Why Plano wholesalers use us",
    why: [
      "Plano's older neighborhoods offer the metro's rare combination of dated interiors and blue-chip resale demand. A double closing lets you compete for those contracts without committing your own cash, then resell the same day to buyers who know exactly what renovated Plano homes bring.",
      "We connect you with transactional funding for the purchase side of your deal so you can take title and resell the same day. Your seller sees a clean cash purchase, your buyer sees a normal sale, and your wholesale spread stays between the two closing statements instead of on an assignment contract.",
      "The fee schedule is published on this page and stays flat across every city and county in the metro. You can underwrite the funding cost into your offer before you tie up the property, and there are no surprise charges at the closing table."
    ],
    steps: [
      { title: "Submit your deal", text: "Send the property address, your contract price, the resale price, and the title company handling the file. East Plano ranch homes and Legacy-area two stories both fit the same form." },
      { title: "We review the numbers", text: "The purchase, the resale, and the paperwork get reviewed with the title company. Questions get answered before closing day, not at the table." },
      { title: "Funding closes your purchase", text: "On closing day the funds for your purchase side are wired. Your resale closes right after, the funds and fee come out of the proceeds, and the spread is yours." }
    ],
    faqs: [
      { q: "Do you fund double closings in Plano?", a: "Yes. Deals across Plano fit, from the 1970s streets of east Plano to the neighborhoods along the Dallas North Tollway and the Legacy corridor. Single family homes and townhouses both work when the numbers do." },
      { q: "What kinds of Plano properties work for a double closing?", a: "Most Plano wholesale deals are 1970s through 1990s brick homes with dated interiors. End buyers renovate them for families and corridor professionals paying for the schools and the location." },
      { q: "What is a double closing?", a: "A double closing is two back to back transactions on the same property on the same day. You buy the home from the seller, take title, and immediately resell it to your end buyer. Because you take title in between, your purchase price and your resale price stay on separate closing statements instead of one assignment contract." },
      { q: "How fast can funding be ready?", a: "Funding can be ready in as little as 24 hours once we have the deal details and the title company information. Files with complete paperwork move fastest, so send everything you have when you submit the form." },
      { q: "What does double close funding cost?", a: "Fees follow the schedule on this page: {{tier1Rate}} on deals up to {{tier1Cap}} with a {{tier1Minimum}} minimum, {{tier2Rate}} from {{tier1Cap}} to {{tier2Cap}}, and {{tier3Rate}} from {{tier2Cap}} to {{fundingMax}}. Extra days, a second closing company, or special paperwork carry the additional fees listed in the schedule." },
      { q: "Can you fund EMD or a Morby Method deal?", a: "Yes. Earnest money deposits and Morby Method structures are part of what we fund. Morby Method fees are paid upfront by Zelle or wire, as listed in the fee schedule above." }
    ],
    nearby: ["richardson", "allen", "frisco"],
    summaryFees: true,
    summarySteps: true,
    scenario: {
      title: "Example: how an east Plano deal can play out",
      intro: "This is an illustrative example, not a real transaction or a promise of results. It shows the moving parts of a typical Plano double closing so you can see where each piece fits.",
      items: [
        "You sign a purchase contract on a 1978 brick ranch in east Plano at $360,000 with a 21 day closing window.",
        "Your end buyer, a renovator who resells to families buying into the Plano schools, commits at $445,000 through the same title company.",
        "The title company schedules both files back to back. Transactional funding covers your $360,000 purchase side, so none of your own cash goes into the deal. Title insurance, escrow fees, the HOA resale certificate and Collin County recording fees appear as their own line items on each side of the file.",
        "Your resale closes right after your purchase. The funding and the {{tier1Rate}} fee from the published schedule come out of the resale proceeds, and the remaining spread is your margin."
      ],
      outro: "The full sequence and the paperwork behind it are covered in how double closing works in Texas, and the fee math is laid out on the transactional funding fees page."
    },
    blurb: "Dated 1970s and 1980s brick homes in the east, blue-chip resale demand across the city."
  },
  {
    slug: "frisco",
    name: "Frisco",
    state: "TX",
    stateName: "Texas",
    county: "Collin County",
    formName: FORM,
    title: "Double Close Funding in Frisco, TX | Transactional Funding",
    description: "Double close funding for Frisco, TX wholesalers. 1990s through 2010s homes along the tollway corridor. Fees from {{tier1Rate}}.",
    h1Bottom: "in Frisco, Texas",
    hero: "Frisco is the metro's growth story, built mostly from the 1990s onward along the Dallas North Tollway. Wholesale deals here look different: estate sales, job relocations and early 1990s homes that predate the boom and now need updates. The resale audience is enormous, from families chasing the schools to buyers relocating into the corridor's corporate campuses, and renovated homes in established sections move quickly. DFW Wholesale Double Close connects you with transactional funding for Frisco deals. You take title with the funder's money, resell to your end buyer the same day, and your markup stays off a single assignment contract. Submit your Frisco deal through the form and funding can be ready in as little as 24 hours.",
    localNoteTitle: "How double closings work in Frisco",
    localNote: "Texas closings typically run through a title company, and most investor files close with the title company the end buyer already uses. Texas charges no state transfer tax, and title insurance premium rates are set at the state level, so the premium itself does not change between title companies while other fees vary by office. Frisco spans Collin and Denton counties, so the deed records with the county clerk where the property actually sits. Nearly every subdivision carries an HOA resale certificate on the file. The title company can confirm the county and anything else property specific.",
    whyHeading: "Why Frisco wholesalers use us",
    why: [
      "Frisco's price points mean a single deal can tie up serious money, which is exactly what a double closing removes. Funded purchase, same day resale, and your capital never leaves your control long enough to miss the next contract.",
      "We connect you with transactional funding for the purchase side of your deal so you can take title and resell the same day. Your seller sees a clean cash purchase, your buyer sees a normal sale, and your wholesale spread stays between the two closing statements instead of on an assignment contract.",
      "The fee schedule is published on this page and stays flat across every city and county in the metro. You can underwrite the funding cost into your offer before you tie up the property, and there are no surprise charges at the closing table."
    ],
    steps: [
      { title: "Submit your deal", text: "Send the property address, your contract price, the resale price, and the title company handling the file. Early 1990s homes and Stonebriar-area builds both fit the same form." },
      { title: "We review the numbers", text: "The purchase, the resale, and the paperwork get reviewed with the title company. Questions get answered before closing day, not at the table." },
      { title: "Funding closes your purchase", text: "On closing day the funds for your purchase side are wired. Your resale closes right after, the funds and fee come out of the proceeds, and the spread is yours." }
    ],
    faqs: [
      { q: "Do you fund double closings in Frisco?", a: "Yes. Deals across Frisco fit, from the older sections built in the 1990s to the neighborhoods along the tollway and the Legacy corridor. Single family homes and townhouses both work when the numbers do." },
      { q: "What kinds of Frisco properties work for a double closing?", a: "Most Frisco wholesale deals are 1990s and 2000s homes with dated finishes, often from estates or corporate relocations. End buyers renovate them for families and relocating professionals buying into the corridor." },
      { q: "What is a double closing?", a: "A double closing is two back to back transactions on the same property on the same day. You buy the home from the seller, take title, and immediately resell it to your end buyer. Because you take title in between, your purchase price and your resale price stay on separate closing statements instead of one assignment contract." },
      { q: "How fast can funding be ready?", a: "Funding can be ready in as little as 24 hours once we have the deal details and the title company information. Files with complete paperwork move fastest, so send everything you have when you submit the form." },
      { q: "What does double close funding cost?", a: "Fees follow the schedule on this page: {{tier1Rate}} on deals up to {{tier1Cap}} with a {{tier1Minimum}} minimum, {{tier2Rate}} from {{tier1Cap}} to {{tier2Cap}}, and {{tier3Rate}} from {{tier2Cap}} to {{fundingMax}}. Extra days, a second closing company, or special paperwork carry the additional fees listed in the schedule." },
      { q: "Can you fund EMD or a Morby Method deal?", a: "Yes. Earnest money deposits and Morby Method structures are part of what we fund. Morby Method fees are paid upfront by Zelle or wire, as listed in the fee schedule above." }
    ],
    nearby: ["plano", "mckinney", "the-colony"],
    blurb: "The growth story. Estate and relocation deals in established sections, reselling to an enormous relocation audience."
  },
  {
    slug: "mckinney",
    name: "McKinney",
    state: "TX",
    stateName: "Texas",
    county: "Collin County",
    formName: FORM,
    title: "Double Close Funding in McKinney, TX | Transactional Funding",
    description: "Double close funding for McKinney, TX wholesalers. Historic downtown to Craig Ranch and the US-75 corridor. Fees from {{tier1Rate}}.",
    h1Bottom: "in McKinney, Texas",
    hero: "McKinney gives wholesalers the widest range in Collin County. The streets around its historic downtown square hold early century and postwar homes with real character, the east side adds 1960s through 1980s stock at accessible price points, and master-planned sections like Craig Ranch pull premium buyers from the tollway corridor. Dated homes across all three bands attract renovators, because McKinney's resale demand has stayed deep through every phase of its growth. DFW Wholesale Double Close connects you with transactional funding for McKinney deals. You take title with the funder's money, resell to your end buyer the same day, and your spread stays off a single assignment contract. Submit your McKinney deal through the form and funding can be ready in as little as 24 hours.",
    localNoteTitle: "How double closings work in McKinney",
    localNote: "Texas closings typically run through a title company, and most investor files close with the title company the end buyer already uses. Texas charges no state transfer tax, and title insurance premium rates are set at the state level, so the premium itself does not change between title companies while other fees vary by office. Homes in McKinney's historic districts carry design guidelines for exterior changes, and older east side properties often involve estate paperwork. Deeds record with the Collin County clerk. The title company can confirm anything property specific.",
    whyHeading: "Why McKinney wholesalers use us",
    why: [
      "McKinney lets you work three price bands from one buyer list: historic character homes, accessible east side stock and premium master-planned sections. A double closing runs the same process on all of them, with your capital free between contracts.",
      "We connect you with transactional funding for the purchase side of your deal so you can take title and resell the same day. Your seller sees a clean cash purchase, your buyer sees a normal sale, and your wholesale spread stays between the two closing statements instead of on an assignment contract.",
      "The fee schedule is published on this page and stays flat across every city and county in the metro. You can underwrite the funding cost into your offer before you tie up the property, and there are no surprise charges at the closing table."
    ],
    steps: [
      { title: "Submit your deal", text: "Send the property address, your contract price, the resale price, and the title company handling the file. Historic district homes and east side ranch houses both fit the same form." },
      { title: "We review the numbers", text: "The purchase, the resale, and the paperwork get reviewed with the title company. Questions get answered before closing day, not at the table." },
      { title: "Funding closes your purchase", text: "On closing day the funds for your purchase side are wired. Your resale closes right after, the funds and fee come out of the proceeds, and the spread is yours." }
    ],
    faqs: [
      { q: "Do you fund double closings in McKinney?", a: "Yes. Deals across McKinney fit, from the historic downtown square to the east side neighborhoods and the master-planned sections along the tollway. Single family homes and townhouses both work when the numbers do." },
      { q: "What kinds of McKinney properties work for a double closing?", a: "Most McKinney wholesale deals are early century through 1980s homes near the historic core and the east side, plus dated homes in the newer sections. End buyers renovate them for buyers drawn to the square and the schools." },
      { q: "What is a double closing?", a: "A double closing is two back to back transactions on the same property on the same day. You buy the home from the seller, take title, and immediately resell it to your end buyer. Because you take title in between, your purchase price and your resale price stay on separate closing statements instead of one assignment contract." },
      { q: "How fast can funding be ready?", a: "Funding can be ready in as little as 24 hours once we have the deal details and the title company information. Files with complete paperwork move fastest, so send everything you have when you submit the form." },
      { q: "What does double close funding cost?", a: "Fees follow the schedule on this page: {{tier1Rate}} on deals up to {{tier1Cap}} with a {{tier1Minimum}} minimum, {{tier2Rate}} from {{tier1Cap}} to {{tier2Cap}}, and {{tier3Rate}} from {{tier2Cap}} to {{fundingMax}}. Extra days, a second closing company, or special paperwork carry the additional fees listed in the schedule." },
      { q: "Can you fund EMD or a Morby Method deal?", a: "Yes. Earnest money deposits and Morby Method structures are part of what we fund. Morby Method fees are paid upfront by Zelle or wire, as listed in the fee schedule above." }
    ],
    nearby: ["allen", "frisco", "prosper"],
    blurb: "The widest range in Collin County. Historic square character, accessible east side stock and premium master-planned sections."
  },
  {
    slug: "allen",
    name: "Allen",
    state: "TX",
    stateName: "Texas",
    county: "Collin County",
    formName: FORM,
    title: "Double Close Funding in Allen, TX | Transactional Funding",
    description: "Double close funding for Allen, TX wholesalers. 1980s through 2000s homes along US-75. Fees from {{tier1Rate}}.",
    h1Bottom: "in Allen, Texas",
    hero: "Allen was built in two waves, and both feed its wholesale market. The 1980s and 1990s neighborhoods along US-75 hold the dated homes renovators chase, while the 2000s sections near Watters Creek and Twin Creeks pull the premium resale buyers. Families target the city for its schools and its position between Plano and McKinney, so renovated homes in the older sections resell into constant demand. DFW Wholesale Double Close connects you with transactional funding for Allen deals. You take title with the funder's money, resell to your end buyer the same day, and your markup stays off a single assignment contract. Submit your Allen deal through the form and funding can be ready in as little as 24 hours.",
    localNoteTitle: "How double closings work in Allen",
    localNote: "Texas closings typically run through a title company, and most investor files close with the title company the end buyer already uses. Texas charges no state transfer tax, and title insurance premium rates are set at the state level, so the premium itself does not change between title companies while other fees vary by office. Most Allen subdivisions carry an HOA resale certificate on the file. Deeds record with the Collin County clerk. The title company can confirm anything property specific.",
    whyHeading: "Why Allen wholesalers use us",
    why: [
      "Allen's school-driven resale demand means renovated homes in its older sections rarely sit. A double closing lets you convert that certainty into same day spreads without parking your own money in the purchase.",
      "We connect you with transactional funding for the purchase side of your deal so you can take title and resell the same day. Your seller sees a clean cash purchase, your buyer sees a normal sale, and your wholesale spread stays between the two closing statements instead of on an assignment contract.",
      "The fee schedule is published on this page and stays flat across every city and county in the metro. You can underwrite the funding cost into your offer before you tie up the property, and there are no surprise charges at the closing table."
    ],
    steps: [
      { title: "Submit your deal", text: "Send the property address, your contract price, the resale price, and the title company handling the file. 1980s homes near US-75 and Twin Creeks builds both fit the same form." },
      { title: "We review the numbers", text: "The purchase, the resale, and the paperwork get reviewed with the title company. Questions get answered before closing day, not at the table." },
      { title: "Funding closes your purchase", text: "On closing day the funds for your purchase side are wired. Your resale closes right after, the funds and fee come out of the proceeds, and the spread is yours." }
    ],
    faqs: [
      { q: "Do you fund double closings in Allen?", a: "Yes. Deals across Allen fit, from the 1980s and 1990s neighborhoods along US-75 to the sections near Watters Creek and Twin Creeks. Single family homes and townhouses both work when the numbers do." },
      { q: "What kinds of Allen properties work for a double closing?", a: "Most Allen wholesale deals are 1980s through 2000s single family homes with dated interiors. End buyers renovate them for families targeting the schools and the central Collin County location." },
      { q: "What is a double closing?", a: "A double closing is two back to back transactions on the same property on the same day. You buy the home from the seller, take title, and immediately resell it to your end buyer. Because you take title in between, your purchase price and your resale price stay on separate closing statements instead of one assignment contract." },
      { q: "How fast can funding be ready?", a: "Funding can be ready in as little as 24 hours once we have the deal details and the title company information. Files with complete paperwork move fastest, so send everything you have when you submit the form." },
      { q: "What does double close funding cost?", a: "Fees follow the schedule on this page: {{tier1Rate}} on deals up to {{tier1Cap}} with a {{tier1Minimum}} minimum, {{tier2Rate}} from {{tier1Cap}} to {{tier2Cap}}, and {{tier3Rate}} from {{tier2Cap}} to {{fundingMax}}. Extra days, a second closing company, or special paperwork carry the additional fees listed in the schedule." },
      { q: "Can you fund EMD or a Morby Method deal?", a: "Yes. Earnest money deposits and Morby Method structures are part of what we fund. Morby Method fees are paid upfront by Zelle or wire, as listed in the fee schedule above." }
    ],
    nearby: ["plano", "mckinney", "wylie"],
    blurb: "Two building waves along US-75. Dated 1980s and 1990s homes reselling into school-driven demand."
  },
  {
    slug: "wylie",
    name: "Wylie",
    state: "TX",
    stateName: "Texas",
    county: "Collin County",
    formName: FORM,
    title: "Double Close Funding in Wylie, TX | Transactional Funding",
    description: "Double close funding for Wylie, TX wholesalers. Historic downtown to newer subdivisions near Lake Lavon. Fees from {{tier1Rate}}.",
    h1Bottom: "in Wylie, Texas",
    hero: "Wylie still feels like a town, and that is its resale pitch. The blocks around its historic downtown hold early century and postwar homes, the 1980s and 1990s added modest subdivisions, and newer construction keeps filling in toward Lake Lavon. Dated homes here attract renovators whose buyers want small-town character with a turnpike commute, at entry prices below Plano and Allen. DFW Wholesale Double Close connects you with transactional funding for Wylie deals. You take title with the funder's money, resell to your end buyer the same day, and your spread stays off a single assignment contract. Submit your Wylie deal through the form and funding can be ready in as little as 24 hours.",
    localNoteTitle: "How double closings work in Wylie",
    localNote: "Texas closings typically run through a title company, and most investor files close with the title company the end buyer already uses. Texas charges no state transfer tax, and title insurance premium rates are set at the state level, so the premium itself does not change between title companies while other fees vary by office. Wylie spans Collin, Dallas and Rockwall counties, so the deed records with the county clerk where the property actually sits. Older homes near downtown can involve pier and beam foundations and estate paperwork. The title company can confirm the county and anything else property specific.",
    whyHeading: "Why Wylie wholesalers use us",
    why: [
      "Wylie's below-Plano entry prices and small-town resale story give wholesalers margin on the right contracts. A double closing captures that margin without leaving your cash sitting in someone else's house between transactions.",
      "We connect you with transactional funding for the purchase side of your deal so you can take title and resell the same day. Your seller sees a clean cash purchase, your buyer sees a normal sale, and your wholesale spread stays between the two closing statements instead of on an assignment contract.",
      "The fee schedule is published on this page and stays flat across every city and county in the metro. You can underwrite the funding cost into your offer before you tie up the property, and there are no surprise charges at the closing table."
    ],
    steps: [
      { title: "Submit your deal", text: "Send the property address, your contract price, the resale price, and the title company handling the file. Downtown-area homes and newer Lake Lavon builds both fit the same form." },
      { title: "We review the numbers", text: "The purchase, the resale, and the paperwork get reviewed with the title company. Questions get answered before closing day, not at the table." },
      { title: "Funding closes your purchase", text: "On closing day the funds for your purchase side are wired. Your resale closes right after, the funds and fee come out of the proceeds, and the spread is yours." }
    ],
    faqs: [
      { q: "Do you fund double closings in Wylie?", a: "Yes. Deals across Wylie fit, from the blocks around the historic downtown to the 1980s and 1990s subdivisions and the newer sections toward Lake Lavon. Single family homes work when the numbers do." },
      { q: "What kinds of Wylie properties work for a double closing?", a: "Most Wylie wholesale deals are early century through 1990s single family homes with dated interiors. End buyers renovate them for buyers who want the town character and the turnpike commute at Collin County's friendlier prices." },
      { q: "What is a double closing?", a: "A double closing is two back to back transactions on the same property on the same day. You buy the home from the seller, take title, and immediately resell it to your end buyer. Because you take title in between, your purchase price and your resale price stay on separate closing statements instead of one assignment contract." },
      { q: "How fast can funding be ready?", a: "Funding can be ready in as little as 24 hours once we have the deal details and the title company information. Files with complete paperwork move fastest, so send everything you have when you submit the form." },
      { q: "What does double close funding cost?", a: "Fees follow the schedule on this page: {{tier1Rate}} on deals up to {{tier1Cap}} with a {{tier1Minimum}} minimum, {{tier2Rate}} from {{tier1Cap}} to {{tier2Cap}}, and {{tier3Rate}} from {{tier2Cap}} to {{fundingMax}}. Extra days, a second closing company, or special paperwork carry the additional fees listed in the schedule." },
      { q: "Can you fund EMD or a Morby Method deal?", a: "Yes. Earnest money deposits and Morby Method structures are part of what we fund. Morby Method fees are paid upfront by Zelle or wire, as listed in the fee schedule above." }
    ],
    nearby: ["sachse", "rowlett", "allen"],
    blurb: "Small-town character in Collin County. Historic downtown blocks and modest subdivisions at friendlier entry prices."
  },
  {
    slug: "prosper",
    name: "Prosper",
    state: "TX",
    stateName: "Texas",
    county: "Collin County",
    formName: FORM,
    title: "Double Close Funding in Prosper, TX | Transactional Funding",
    description: "Double close funding for Prosper, TX wholesalers. Old town lots to new estate sections north of Frisco. Fees from {{tier1Rate}}.",
    h1Bottom: "in Prosper, Texas",
    hero: "Prosper has gone from farm town to one of the metro's fastest-growing communities in barely a decade, and its wholesale deals come from that transition. The old townsite holds modest older homes and rural lots, while the newer sections along the Dallas North Tollway are filling with estate homes at premium prices. When an older property or an estate sale surfaces here, renovators and custom-home buyers compete for the land alone. DFW Wholesale Double Close connects you with transactional funding for Prosper deals. You take title with the funder's money, resell to your end buyer the same day, and your markup stays off a single assignment contract. Submit your Prosper deal through the form and funding can be ready in as little as 24 hours.",
    localNoteTitle: "How double closings work in Prosper",
    localNote: "Texas closings typically run through a title company, and most investor files close with the title company the end buyer already uses. Texas charges no state transfer tax, and title insurance premium rates are set at the state level, so the premium itself does not change between title companies while other fees vary by office. Prosper spans Collin and Denton counties, and older rural properties can involve survey, easement or agricultural exemption questions on the file. The title company can confirm the county and anything else property specific.",
    whyHeading: "Why Prosper wholesalers use us",
    why: [
      "Prosper deals are land plays and estate plays at premium price points, so the funded purchase is the hard part. A double closing covers it, letting you resell the same day without wiring your own reserves into a half-million-dollar lot.",
      "We connect you with transactional funding for the purchase side of your deal so you can take title and resell the same day. Your seller sees a clean cash purchase, your buyer sees a normal sale, and your wholesale spread stays between the two closing statements instead of on an assignment contract.",
      "The fee schedule is published on this page and stays flat across every city and county in the metro. You can underwrite the funding cost into your offer before you tie up the property, and there are no surprise charges at the closing table."
    ],
    steps: [
      { title: "Submit your deal", text: "Send the property address, your contract price, the resale price, and the title company handling the file. Old townsite homes and rural lots both fit the same form." },
      { title: "We review the numbers", text: "The purchase, the resale, and the paperwork get reviewed with the title company. Questions get answered before closing day, not at the table." },
      { title: "Funding closes your purchase", text: "On closing day the funds for your purchase side are wired. Your resale closes right after, the funds and fee come out of the proceeds, and the spread is yours." }
    ],
    faqs: [
      { q: "Do you fund double closings in Prosper?", a: "Yes. Deals across Prosper fit, from the old townsite to the newer estate sections along the tollway. Single family homes and residential lots both work when the numbers do." },
      { q: "What kinds of Prosper properties work for a double closing?", a: "Most Prosper wholesale deals are older homes and rural lots from the pre-boom era, plus estate sales in the newer sections. End buyers include renovators and custom-home buyers competing for land in the corridor." },
      { q: "What is a double closing?", a: "A double closing is two back to back transactions on the same property on the same day. You buy the home from the seller, take title, and immediately resell it to your end buyer. Because you take title in between, your purchase price and your resale price stay on separate closing statements instead of one assignment contract." },
      { q: "How fast can funding be ready?", a: "Funding can be ready in as little as 24 hours once we have the deal details and the title company information. Files with complete paperwork move fastest, so send everything you have when you submit the form." },
      { q: "What does double close funding cost?", a: "Fees follow the schedule on this page: {{tier1Rate}} on deals up to {{tier1Cap}} with a {{tier1Minimum}} minimum, {{tier2Rate}} from {{tier1Cap}} to {{tier2Cap}}, and {{tier3Rate}} from {{tier2Cap}} to {{fundingMax}}. Extra days, a second closing company, or special paperwork carry the additional fees listed in the schedule." },
      { q: "Can you fund EMD or a Morby Method deal?", a: "Yes. Earnest money deposits and Morby Method structures are part of what we fund. Morby Method fees are paid upfront by Zelle or wire, as listed in the fee schedule above." }
    ],
    nearby: ["frisco", "celina", "mckinney"],
    blurb: "Farm town turned growth corridor. Old townsite homes and rural lots that land buyers compete for."
  },
  {
    slug: "celina",
    name: "Celina",
    state: "TX",
    stateName: "Texas",
    county: "Collin County",
    formName: FORM,
    title: "Double Close Funding in Celina, TX | Transactional Funding",
    description: "Double close funding for Celina, TX wholesalers. Old square homes to new builds at the metro's northern edge. Fees from {{tier1Rate}}.",
    h1Bottom: "in Celina, Texas",
    hero: "Celina sits at the northern edge of the metro's growth wave, and its wholesale market is built on the contrast. The blocks around the old square hold modest early century and postwar homes, while thousands of acres around them are converting from farmland to subdivisions. Older properties here attract renovators, land buyers and builders looking for position in the path of growth, often all three bidding on the same parcel. DFW Wholesale Double Close connects you with transactional funding for Celina deals. You take title with the funder's money, resell to your end buyer the same day, and your spread stays off a single assignment contract. Submit your Celina deal through the form and funding can be ready in as little as 24 hours.",
    localNoteTitle: "How double closings work in Celina",
    localNote: "Texas closings typically run through a title company, and most investor files close with the title company the end buyer already uses. Texas charges no state transfer tax, and title insurance premium rates are set at the state level, so the premium itself does not change between title companies while other fees vary by office. Celina's rural-edge properties can involve septic, well, survey or agricultural exemption questions, and older homes near the square often carry estate paperwork. Deeds record with the Collin County clerk. The title company can confirm anything property specific.",
    whyHeading: "Why Celina wholesalers use us",
    why: [
      "Celina's growth-path parcels attract multiple buyer types at once, which is when a clean funded close wins the contract. A double closing lets you perform like a cash buyer and resell the same day, without the cash.",
      "We connect you with transactional funding for the purchase side of your deal so you can take title and resell the same day. Your seller sees a clean cash purchase, your buyer sees a normal sale, and your wholesale spread stays between the two closing statements instead of on an assignment contract.",
      "The fee schedule is published on this page and stays flat across every city and county in the metro. You can underwrite the funding cost into your offer before you tie up the property, and there are no surprise charges at the closing table."
    ],
    steps: [
      { title: "Submit your deal", text: "Send the property address, your contract price, the resale price, and the title company handling the file. Homes near the old square and rural-edge parcels both fit the same form." },
      { title: "We review the numbers", text: "The purchase, the resale, and the paperwork get reviewed with the title company. Questions get answered before closing day, not at the table." },
      { title: "Funding closes your purchase", text: "On closing day the funds for your purchase side are wired. Your resale closes right after, the funds and fee come out of the proceeds, and the spread is yours." }
    ],
    faqs: [
      { q: "Do you fund double closings in Celina?", a: "Yes. Deals across Celina fit, from the blocks around the old square to the rural properties in the path of growth. Single family homes and residential lots both work when the numbers do." },
      { q: "What kinds of Celina properties work for a double closing?", a: "Most Celina wholesale deals are older homes near the town center and rural parcels converting to development. End buyers include renovators, land bankers and builders buying position in the growth corridor." },
      { q: "What is a double closing?", a: "A double closing is two back to back transactions on the same property on the same day. You buy the home from the seller, take title, and immediately resell it to your end buyer. Because you take title in between, your purchase price and your resale price stay on separate closing statements instead of one assignment contract." },
      { q: "How fast can funding be ready?", a: "Funding can be ready in as little as 24 hours once we have the deal details and the title company information. Files with complete paperwork move fastest, so send everything you have when you submit the form." },
      { q: "What does double close funding cost?", a: "Fees follow the schedule on this page: {{tier1Rate}} on deals up to {{tier1Cap}} with a {{tier1Minimum}} minimum, {{tier2Rate}} from {{tier1Cap}} to {{tier2Cap}}, and {{tier3Rate}} from {{tier2Cap}} to {{fundingMax}}. Extra days, a second closing company, or special paperwork carry the additional fees listed in the schedule." },
      { q: "Can you fund EMD or a Morby Method deal?", a: "Yes. Earnest money deposits and Morby Method structures are part of what we fund. Morby Method fees are paid upfront by Zelle or wire, as listed in the fee schedule above." }
    ],
    nearby: ["prosper", "mckinney", "denton"],
    blurb: "The northern edge of the growth wave. Old square homes and rural parcels with three buyer types bidding."
  },
  {
    slug: "denton",
    name: "Denton",
    state: "TX",
    stateName: "Texas",
    county: "Denton County",
    formName: FORM,
    title: "Double Close Funding in Denton, TX | Transactional Funding",
    description: "Double close funding for Denton, TX wholesalers. Postwar homes near the square to newer sections up I-35. Fees from {{tier1Rate}}.",
    h1Bottom: "in Denton, Texas",
    hero: "Denton runs on two universities and a historic square, and its housing stock matches. The streets near the downtown square and the UNT and TWU campuses hold 1940s through 1970s homes that draw renovators and landlords in equal measure, while newer subdivisions push north and west along I-35. Student and staff housing demand keeps the rental exit deep, and renovated homes resell to buyers who want Denton's character over a generic suburb. DFW Wholesale Double Close connects you with transactional funding for Denton deals. You take title with the funder's money, resell to your end buyer the same day, and your markup stays off a single assignment contract. Submit your Denton deal through the form and funding can be ready in as little as 24 hours.",
    localNoteTitle: "How double closings work in Denton",
    localNote: "Texas closings typically run through a title company, and most investor files close with the title company the end buyer already uses. Texas charges no state transfer tax, and title insurance premium rates are set at the state level, so the premium itself does not change between title companies while other fees vary by office. Homes near Denton's historic square can fall under preservation guidelines, and the older pier and beam stock brings foundation questions into inspections. Deeds record with the Denton County clerk. The title company can confirm anything property specific.",
    whyHeading: "Why Denton wholesalers use us",
    why: [
      "Denton's university-driven rental market gives every deal a second exit, and its older stock keeps producing renovation candidates. A double closing lets you play either exit without your own capital parked between transactions.",
      "We connect you with transactional funding for the purchase side of your deal so you can take title and resell the same day. Your seller sees a clean cash purchase, your buyer sees a normal sale, and your wholesale spread stays between the two closing statements instead of on an assignment contract.",
      "The fee schedule is published on this page and stays flat across every city and county in the metro. You can underwrite the funding cost into your offer before you tie up the property, and there are no surprise charges at the closing table."
    ],
    steps: [
      { title: "Submit your deal", text: "Send the property address, your contract price, the resale price, and the title company handling the file. Homes near the square and newer I-35 subdivisions both fit the same form." },
      { title: "We review the numbers", text: "The purchase, the resale, and the paperwork get reviewed with the title company. Questions get answered before closing day, not at the table." },
      { title: "Funding closes your purchase", text: "On closing day the funds for your purchase side are wired. Your resale closes right after, the funds and fee come out of the proceeds, and the spread is yours." }
    ],
    faqs: [
      { q: "Do you fund double closings in Denton?", a: "Yes. Deals across Denton fit, from the streets near the downtown square and the university campuses to the newer subdivisions along I-35 and US-380. Single family homes and townhouses both work when the numbers do." },
      { q: "What kinds of Denton properties work for a double closing?", a: "Most Denton wholesale deals are 1940s through 1980s homes near the square and campuses, plus dated homes in the newer sections. End buyers include renovators reselling to owner-occupants and landlords holding for the university rental market." },
      { q: "What is a double closing?", a: "A double closing is two back to back transactions on the same property on the same day. You buy the home from the seller, take title, and immediately resell it to your end buyer. Because you take title in between, your purchase price and your resale price stay on separate closing statements instead of one assignment contract." },
      { q: "How fast can funding be ready?", a: "Funding can be ready in as little as 24 hours once we have the deal details and the title company information. Files with complete paperwork move fastest, so send everything you have when you submit the form." },
      { q: "What does double close funding cost?", a: "Fees follow the schedule on this page: {{tier1Rate}} on deals up to {{tier1Cap}} with a {{tier1Minimum}} minimum, {{tier2Rate}} from {{tier1Cap}} to {{tier2Cap}}, and {{tier3Rate}} from {{tier2Cap}} to {{fundingMax}}. Extra days, a second closing company, or special paperwork carry the additional fees listed in the schedule." },
      { q: "Can you fund EMD or a Morby Method deal?", a: "Yes. Earnest money deposits and Morby Method structures are part of what we fund. Morby Method fees are paid upfront by Zelle or wire, as listed in the fee schedule above." }
    ],
    nearby: ["lewisville", "little-elm", "flower-mound"],
    blurb: "Two universities and a historic square. Postwar homes with a renovation exit and a rental exit on the same street."
  },
  {
    slug: "lewisville",
    name: "Lewisville",
    state: "TX",
    stateName: "Texas",
    county: "Denton County",
    formName: FORM,
    title: "Double Close Funding in Lewisville, TX | Transactional Funding",
    description: "Double close funding for Lewisville, TX wholesalers. 1960s through 1990s homes from Old Town to the lake. Fees from {{tier1Rate}}.",
    h1Bottom: "in Lewisville, Texas",
    hero: "Lewisville stretches from its Old Town core to the shores of Lake Lewisville, and its housing stock spans every decade between. The 1960s and 1970s neighborhoods near Old Town offer the classic renovation profile, while Vista Ridge and the lake-adjacent sections pull higher price points. I-35E runs straight through town, so renovated homes resell to commuters heading to the corridor's job centers in both directions. DFW Wholesale Double Close connects you with transactional funding for Lewisville deals. You take title with the funder's money, resell to your end buyer the same day, and your spread stays off a single assignment contract. Submit your Lewisville deal through the form and funding can be ready in as little as 24 hours.",
    localNoteTitle: "How double closings work in Lewisville",
    localNote: "Texas closings typically run through a title company, and most investor files close with the title company the end buyer already uses. Texas charges no state transfer tax, and title insurance premium rates are set at the state level, so the premium itself does not change between title companies while other fees vary by office. Lake-adjacent properties can bring flood plain and elevation questions, and Old Town's older homes often carry pier and beam foundations. Deeds record with the Denton County clerk. The title company can confirm anything property specific.",
    whyHeading: "Why Lewisville wholesalers use us",
    why: [
      "Lewisville's spread of eras and price points keeps deal flow steady across market cycles. A double closing lets you work Old Town cottages and Vista Ridge two stories with the same process and none of your own cash in the middle.",
      "We connect you with transactional funding for the purchase side of your deal so you can take title and resell the same day. Your seller sees a clean cash purchase, your buyer sees a normal sale, and your wholesale spread stays between the two closing statements instead of on an assignment contract.",
      "The fee schedule is published on this page and stays flat across every city and county in the metro. You can underwrite the funding cost into your offer before you tie up the property, and there are no surprise charges at the closing table."
    ],
    steps: [
      { title: "Submit your deal", text: "Send the property address, your contract price, the resale price, and the title company handling the file. Old Town homes and Vista Ridge builds both fit the same form." },
      { title: "We review the numbers", text: "The purchase, the resale, and the paperwork get reviewed with the title company. Questions get answered before closing day, not at the table." },
      { title: "Funding closes your purchase", text: "On closing day the funds for your purchase side are wired. Your resale closes right after, the funds and fee come out of the proceeds, and the spread is yours." }
    ],
    faqs: [
      { q: "Do you fund double closings in Lewisville?", a: "Yes. Deals across Lewisville fit, from the Old Town core to Vista Ridge and the neighborhoods near Lake Lewisville. Single family homes and townhouses both work when the numbers do." },
      { q: "What kinds of Lewisville properties work for a double closing?", a: "Most Lewisville wholesale deals are 1960s through 1990s single family homes with dated interiors. End buyers renovate them for I-35E corridor commuters and families drawn to the lake." },
      { q: "What is a double closing?", a: "A double closing is two back to back transactions on the same property on the same day. You buy the home from the seller, take title, and immediately resell it to your end buyer. Because you take title in between, your purchase price and your resale price stay on separate closing statements instead of one assignment contract." },
      { q: "How fast can funding be ready?", a: "Funding can be ready in as little as 24 hours once we have the deal details and the title company information. Files with complete paperwork move fastest, so send everything you have when you submit the form." },
      { q: "What does double close funding cost?", a: "Fees follow the schedule on this page: {{tier1Rate}} on deals up to {{tier1Cap}} with a {{tier1Minimum}} minimum, {{tier2Rate}} from {{tier1Cap}} to {{tier2Cap}}, and {{tier3Rate}} from {{tier2Cap}} to {{fundingMax}}. Extra days, a second closing company, or special paperwork carry the additional fees listed in the schedule." },
      { q: "Can you fund EMD or a Morby Method deal?", a: "Yes. Earnest money deposits and Morby Method structures are part of what we fund. Morby Method fees are paid upfront by Zelle or wire, as listed in the fee schedule above." }
    ],
    nearby: ["flower-mound", "carrollton", "the-colony"],
    blurb: "Old Town to the lakeshore. 1960s through 1990s stock reselling to I-35E corridor commuters."
  },
  {
    slug: "flower-mound",
    name: "Flower Mound",
    state: "TX",
    stateName: "Texas",
    county: "Denton County",
    formName: FORM,
    title: "Double Close Funding in Flower Mound, TX | Transactional Funding",
    description: "Double close funding for Flower Mound, TX wholesalers. 1980s through 2010s homes near Grapevine Lake. Fees from {{tier1Rate}}.",
    h1Bottom: "in Flower Mound, Texas",
    hero: "Flower Mound is one of the metro's most sought-after family addresses, built mostly from the 1980s onward between Grapevine Lake and the southern county line. Wholesale deals are infrequent but worthwhile: dated 1980s and 1990s homes, estate sales and relocations that let a renovator buy below the neighborhood's ceiling. Resale buyers pay for the schools, the trail system and the lake access, so renovated homes move fast when priced right. DFW Wholesale Double Close connects you with transactional funding for Flower Mound deals. You take title with the funder's money, resell to your end buyer the same day, and your markup stays off a single assignment contract. Submit your deal through the form and funding can be ready in as little as 24 hours.",
    localNoteTitle: "How double closings work in Flower Mound",
    localNote: "Texas closings typically run through a title company, and most investor files close with the title company the end buyer already uses. Texas charges no state transfer tax, and title insurance premium rates are set at the state level, so the premium itself does not change between title companies while other fees vary by office. Most Flower Mound neighborhoods carry an HOA resale certificate, and properties near the lake can involve elevation questions. Deeds record with the Denton County clerk. The title company can confirm anything property specific.",
    whyHeading: "Why Flower Mound wholesalers use us",
    why: [
      "Flower Mound's price points turn every deal into a capital problem, and a double closing solves it: the purchase side is funded, the resale follows the same day, and your spread never depends on your bank balance.",
      "We connect you with transactional funding for the purchase side of your deal so you can take title and resell the same day. Your seller sees a clean cash purchase, your buyer sees a normal sale, and your wholesale spread stays between the two closing statements instead of on an assignment contract.",
      "The fee schedule is published on this page and stays flat across every city and county in the metro. You can underwrite the funding cost into your offer before you tie up the property, and there are no surprise charges at the closing table."
    ],
    steps: [
      { title: "Submit your deal", text: "Send the property address, your contract price, the resale price, and the title company handling the file. 1980s originals and Lakeside-area builds both fit the same form." },
      { title: "We review the numbers", text: "The purchase, the resale, and the paperwork get reviewed with the title company. Questions get answered before closing day, not at the table." },
      { title: "Funding closes your purchase", text: "On closing day the funds for your purchase side are wired. Your resale closes right after, the funds and fee come out of the proceeds, and the spread is yours." }
    ],
    faqs: [
      { q: "Do you fund double closings in Flower Mound?", a: "Yes. Deals across Flower Mound fit, from the original 1980s sections to the neighborhoods near Lakeside and Grapevine Lake. Single family homes work when the numbers do." },
      { q: "What kinds of Flower Mound properties work for a double closing?", a: "Most Flower Mound wholesale deals are 1980s and 1990s homes with dated finishes, often from estates or relocations. End buyers renovate them for families paying for the schools, trails and lake access." },
      { q: "What is a double closing?", a: "A double closing is two back to back transactions on the same property on the same day. You buy the home from the seller, take title, and immediately resell it to your end buyer. Because you take title in between, your purchase price and your resale price stay on separate closing statements instead of one assignment contract." },
      { q: "How fast can funding be ready?", a: "Funding can be ready in as little as 24 hours once we have the deal details and the title company information. Files with complete paperwork move fastest, so send everything you have when you submit the form." },
      { q: "What does double close funding cost?", a: "Fees follow the schedule on this page: {{tier1Rate}} on deals up to {{tier1Cap}} with a {{tier1Minimum}} minimum, {{tier2Rate}} from {{tier1Cap}} to {{tier2Cap}}, and {{tier3Rate}} from {{tier2Cap}} to {{fundingMax}}. Extra days, a second closing company, or special paperwork carry the additional fees listed in the schedule." },
      { q: "Can you fund EMD or a Morby Method deal?", a: "Yes. Earnest money deposits and Morby Method structures are part of what we fund. Morby Method fees are paid upfront by Zelle or wire, as listed in the fee schedule above." }
    ],
    nearby: ["lewisville", "coppell", "grapevine"],
    blurb: "A sought-after family address. Infrequent but worthwhile estate and relocation deals near Grapevine Lake."
  },
  {
    slug: "little-elm",
    name: "Little Elm",
    state: "TX",
    stateName: "Texas",
    county: "Denton County",
    formName: FORM,
    title: "Double Close Funding in Little Elm, TX | Transactional Funding",
    description: "Double close funding for Little Elm, TX wholesalers. Old lake cottages to new subdivisions on the peninsula. Fees from {{tier1Rate}}.",
    h1Bottom: "in Little Elm, Texas",
    hero: "Little Elm grew from a lake-cottage community on the Lewisville Lake peninsula into one of Denton County's boomtowns. The original streets near the old town core hold modest older homes and lake cottages, while wave after wave of new subdivisions has remade the rest of the city. That mix gives wholesalers two distinct deal types: dated cottages with renovation upside and early-2000s homes from the first growth wave now needing updates. DFW Wholesale Double Close connects you with transactional funding for Little Elm deals. You take title with the funder's money, resell to your end buyer the same day, and your spread stays off a single assignment contract. Submit your Little Elm deal through the form and funding can be ready in as little as 24 hours.",
    localNoteTitle: "How double closings work in Little Elm",
    localNote: "Texas closings typically run through a title company, and most investor files close with the title company the end buyer already uses. Texas charges no state transfer tax, and title insurance premium rates are set at the state level, so the premium itself does not change between title companies while other fees vary by office. Older lake-area properties can involve flood plain, septic or survey questions, and the newer subdivisions carry HOA resale certificates. Deeds record with the Denton County clerk. The title company can confirm anything property specific.",
    whyHeading: "Why Little Elm wholesalers use us",
    why: [
      "Little Elm's cottage-to-subdivision range means deals at very different price points land in the same week. A double closing handles both with one process, keeping your capital free whichever one you take down.",
      "We connect you with transactional funding for the purchase side of your deal so you can take title and resell the same day. Your seller sees a clean cash purchase, your buyer sees a normal sale, and your wholesale spread stays between the two closing statements instead of on an assignment contract.",
      "The fee schedule is published on this page and stays flat across every city and county in the metro. You can underwrite the funding cost into your offer before you tie up the property, and there are no surprise charges at the closing table."
    ],
    steps: [
      { title: "Submit your deal", text: "Send the property address, your contract price, the resale price, and the title company handling the file. Old lake cottages and first-wave subdivision homes both fit the same form." },
      { title: "We review the numbers", text: "The purchase, the resale, and the paperwork get reviewed with the title company. Questions get answered before closing day, not at the table." },
      { title: "Funding closes your purchase", text: "On closing day the funds for your purchase side are wired. Your resale closes right after, the funds and fee come out of the proceeds, and the spread is yours." }
    ],
    faqs: [
      { q: "Do you fund double closings in Little Elm?", a: "Yes. Deals across Little Elm fit, from the old streets near the lake to the newer subdivisions along Eldorado Parkway and FM 423. Single family homes work when the numbers do." },
      { q: "What kinds of Little Elm properties work for a double closing?", a: "Most Little Elm wholesale deals are older lake cottages and 2000s homes with dated finishes. End buyers renovate them for buyers who want the peninsula's lake access at prices below Frisco." },
      { q: "What is a double closing?", a: "A double closing is two back to back transactions on the same property on the same day. You buy the home from the seller, take title, and immediately resell it to your end buyer. Because you take title in between, your purchase price and your resale price stay on separate closing statements instead of one assignment contract." },
      { q: "How fast can funding be ready?", a: "Funding can be ready in as little as 24 hours once we have the deal details and the title company information. Files with complete paperwork move fastest, so send everything you have when you submit the form." },
      { q: "What does double close funding cost?", a: "Fees follow the schedule on this page: {{tier1Rate}} on deals up to {{tier1Cap}} with a {{tier1Minimum}} minimum, {{tier2Rate}} from {{tier1Cap}} to {{tier2Cap}}, and {{tier3Rate}} from {{tier2Cap}} to {{fundingMax}}. Extra days, a second closing company, or special paperwork carry the additional fees listed in the schedule." },
      { q: "Can you fund EMD or a Morby Method deal?", a: "Yes. Earnest money deposits and Morby Method structures are part of what we fund. Morby Method fees are paid upfront by Zelle or wire, as listed in the fee schedule above." }
    ],
    nearby: ["frisco", "the-colony", "denton"],
    blurb: "Lake-cottage roots, boomtown growth. Dated cottages and first-wave homes at prices below Frisco."
  },
  {
    slug: "the-colony",
    name: "The Colony",
    state: "TX",
    stateName: "Texas",
    county: "Denton County",
    formName: FORM,
    title: "Double Close Funding in The Colony, TX | Transactional Funding",
    description: "Double close funding for The Colony, TX wholesalers. 1970s through 1990s homes by Grandscape and the lake. Fees from {{tier1Rate}}.",
    h1Bottom: "in The Colony, Texas",
    hero: "The Colony began as a 1970s planned community on the shores of Lewisville Lake, and its original neighborhoods are now prime renovation stock. Homes from that first era sit on established streets minutes from Grandscape and the tollway, and renovated examples resell to buyers who want the location and the lake without Frisco prices. Newer sections toward Austin Ranch keep the buyer pool deep. DFW Wholesale Double Close connects you with transactional funding for The Colony deals. You take title with the funder's money, resell to your end buyer the same day, and your markup stays off a single assignment contract. Submit your deal through the form and funding can be ready in as little as 24 hours.",
    localNoteTitle: "How double closings work in The Colony",
    localNote: "Texas closings typically run through a title company, and most investor files close with the title company the end buyer already uses. Texas charges no state transfer tax, and title insurance premium rates are set at the state level, so the premium itself does not change between title companies while other fees vary by office. The city's 1970s slabs bring foundation and plumbing questions into inspections, and homes near the lake can involve elevation questions. Deeds record with the Denton County clerk. The title company can confirm anything property specific.",
    whyHeading: "Why The Colony wholesalers use us",
    why: [
      "The Colony's original neighborhoods give renovators a proven product next to one of the metro's busiest new retail districts. A double closing lets you capture that resale demand without your own cash committed between contracts.",
      "We connect you with transactional funding for the purchase side of your deal so you can take title and resell the same day. Your seller sees a clean cash purchase, your buyer sees a normal sale, and your wholesale spread stays between the two closing statements instead of on an assignment contract.",
      "The fee schedule is published on this page and stays flat across every city and county in the metro. You can underwrite the funding cost into your offer before you tie up the property, and there are no surprise charges at the closing table."
    ],
    steps: [
      { title: "Submit your deal", text: "Send the property address, your contract price, the resale price, and the title company handling the file. Original 1970s homes and Austin Ranch builds both fit the same form." },
      { title: "We review the numbers", text: "The purchase, the resale, and the paperwork get reviewed with the title company. Questions get answered before closing day, not at the table." },
      { title: "Funding closes your purchase", text: "On closing day the funds for your purchase side are wired. Your resale closes right after, the funds and fee come out of the proceeds, and the spread is yours." }
    ],
    faqs: [
      { q: "Do you fund double closings in The Colony?", a: "Yes. Deals across The Colony fit, from the original planned-community streets to the newer sections near Grandscape and Austin Ranch. Single family homes and townhouses both work when the numbers do." },
      { q: "What kinds of Colony properties work for a double closing?", a: "Most wholesale deals here are 1970s through 1990s homes with dated interiors. End buyers renovate them for buyers who want the lake, the tollway and the Grandscape district without Frisco prices." },
      { q: "What is a double closing?", a: "A double closing is two back to back transactions on the same property on the same day. You buy the home from the seller, take title, and immediately resell it to your end buyer. Because you take title in between, your purchase price and your resale price stay on separate closing statements instead of one assignment contract." },
      { q: "How fast can funding be ready?", a: "Funding can be ready in as little as 24 hours once we have the deal details and the title company information. Files with complete paperwork move fastest, so send everything you have when you submit the form." },
      { q: "What does double close funding cost?", a: "Fees follow the schedule on this page: {{tier1Rate}} on deals up to {{tier1Cap}} with a {{tier1Minimum}} minimum, {{tier2Rate}} from {{tier1Cap}} to {{tier2Cap}}, and {{tier3Rate}} from {{tier2Cap}} to {{fundingMax}}. Extra days, a second closing company, or special paperwork carry the additional fees listed in the schedule." },
      { q: "Can you fund EMD or a Morby Method deal?", a: "Yes. Earnest money deposits and Morby Method structures are part of what we fund. Morby Method fees are paid upfront by Zelle or wire, as listed in the fee schedule above." }
    ],
    nearby: ["lewisville", "frisco", "carrollton"],
    blurb: "A 1970s planned community reborn. Original homes reselling next to the Grandscape district."
  },
  {
    slug: "waxahachie",
    name: "Waxahachie",
    state: "TX",
    stateName: "Texas",
    county: "Ellis County",
    formName: FORM,
    title: "Double Close Funding in Waxahachie, TX | Transactional Funding",
    description: "Double close funding for Waxahachie, TX wholesalers. Victorian gingerbread homes to postwar stock south of Dallas. Fees from {{tier1Rate}}.",
    h1Bottom: "in Waxahachie, Texas",
    hero: "Waxahachie is Ellis County's seat and one of North Texas's most distinctive older towns. The neighborhoods around its courthouse square hold Victorian and early century homes with genuine gingerbread detail, and postwar through 1980s stock fills the streets beyond. Commuters reach Dallas up I-35E in under an hour, so renovated homes resell to buyers who trade a longer drive for character and price. DFW Wholesale Double Close connects you with transactional funding for Waxahachie deals. You take title with the funder's money, resell to your end buyer the same day, and your spread stays off a single assignment contract. Submit your Waxahachie deal through the form and funding can be ready in as little as 24 hours.",
    localNoteTitle: "How double closings work in Waxahachie",
    localNote: "Texas closings typically run through a title company, and most investor files close with the title company the end buyer already uses. Texas charges no state transfer tax, and title insurance premium rates are set at the state level, so the premium itself does not change between title companies while other fees vary by office. Homes in Waxahachie's historic districts carry design guidelines for exterior changes, and the older stock often involves pier and beam foundations and estate paperwork. Deeds record with the Ellis County clerk. The title company can confirm anything property specific.",
    whyHeading: "Why Waxahachie wholesalers use us",
    why: [
      "Waxahachie's character homes give renovated product a story that generic subdivisions cannot match, and its prices leave room for the work. A double closing lets you hold that margin without holding the property with your own money.",
      "We connect you with transactional funding for the purchase side of your deal so you can take title and resell the same day. Your seller sees a clean cash purchase, your buyer sees a normal sale, and your wholesale spread stays between the two closing statements instead of on an assignment contract.",
      "The fee schedule is published on this page and stays flat across every city and county in the metro. You can underwrite the funding cost into your offer before you tie up the property, and there are no surprise charges at the closing table."
    ],
    steps: [
      { title: "Submit your deal", text: "Send the property address, your contract price, the resale price, and the title company handling the file. Historic district homes and postwar streets both fit the same form." },
      { title: "We review the numbers", text: "The purchase, the resale, and the paperwork get reviewed with the title company. Questions get answered before closing day, not at the table." },
      { title: "Funding closes your purchase", text: "On closing day the funds for your purchase side are wired. Your resale closes right after, the funds and fee come out of the proceeds, and the spread is yours." }
    ],
    faqs: [
      { q: "Do you fund double closings in Waxahachie?", a: "Yes. Deals across Waxahachie fit, from the historic neighborhoods around the courthouse square to the postwar streets and newer sections toward I-35E. Single family homes work when the numbers do." },
      { q: "What kinds of Waxahachie properties work for a double closing?", a: "Most Waxahachie wholesale deals are early century and postwar single family homes with dated interiors. End buyers renovate them for buyers who trade the commute for the town's character and prices." },
      { q: "What is a double closing?", a: "A double closing is two back to back transactions on the same property on the same day. You buy the home from the seller, take title, and immediately resell it to your end buyer. Because you take title in between, your purchase price and your resale price stay on separate closing statements instead of one assignment contract." },
      { q: "How fast can funding be ready?", a: "Funding can be ready in as little as 24 hours once we have the deal details and the title company information. Files with complete paperwork move fastest, so send everything you have when you submit the form." },
      { q: "What does double close funding cost?", a: "Fees follow the schedule on this page: {{tier1Rate}} on deals up to {{tier1Cap}} with a {{tier1Minimum}} minimum, {{tier2Rate}} from {{tier1Cap}} to {{tier2Cap}}, and {{tier3Rate}} from {{tier2Cap}} to {{fundingMax}}. Extra days, a second closing company, or special paperwork carry the additional fees listed in the schedule." },
      { q: "Can you fund EMD or a Morby Method deal?", a: "Yes. Earnest money deposits and Morby Method structures are part of what we fund. Morby Method fees are paid upfront by Zelle or wire, as listed in the fee schedule above." }
    ],
    nearby: ["midlothian", "lancaster", "desoto"],
    blurb: "Ellis County's historic seat. Gingerbread Victorians and postwar stock for buyers trading drive time for character."
  },
  {
    slug: "midlothian",
    name: "Midlothian",
    state: "TX",
    stateName: "Texas",
    county: "Ellis County",
    formName: FORM,
    title: "Double Close Funding in Midlothian, TX | Transactional Funding",
    description: "Double close funding for Midlothian, TX wholesalers. Old cement-town core to new subdivisions on US-287. Fees from {{tier1Rate}}.",
    h1Bottom: "in Midlothian, Texas",
    hero: "Midlothian spent a century as a cement and quarry town before the metro's growth arrived, and its market shows both eras. The older core near US-287 holds modest mid-century homes at accessible prices, while new subdivisions push outward in every direction. Renovated homes resell to buyers who work in the southern metro and want newer-town prices with an established community around them. DFW Wholesale Double Close connects you with transactional funding for Midlothian deals. You take title with the funder's money, resell to your end buyer the same day, and your markup stays off a single assignment contract. Submit your Midlothian deal through the form and funding can be ready in as little as 24 hours.",
    localNoteTitle: "How double closings work in Midlothian",
    localNote: "Texas closings typically run through a title company, and most investor files close with the title company the end buyer already uses. Texas charges no state transfer tax, and title insurance premium rates are set at the state level, so the premium itself does not change between title companies while other fees vary by office. Midlothian's rural-edge properties can involve survey and easement questions, and the newer subdivisions carry HOA resale certificates. Deeds record with the Ellis County clerk. The title company can confirm anything property specific.",
    whyHeading: "Why Midlothian wholesalers use us",
    why: [
      "Midlothian's growth brings buyers from both directions: renovators working the older core and families stretching from Mansfield and Cedar Hill. A double closing lets you sell into either one without your own capital tied up between transactions.",
      "We connect you with transactional funding for the purchase side of your deal so you can take title and resell the same day. Your seller sees a clean cash purchase, your buyer sees a normal sale, and your wholesale spread stays between the two closing statements instead of on an assignment contract.",
      "The fee schedule is published on this page and stays flat across every city and county in the metro. You can underwrite the funding cost into your offer before you tie up the property, and there are no surprise charges at the closing table."
    ],
    steps: [
      { title: "Submit your deal", text: "Send the property address, your contract price, the resale price, and the title company handling the file. Older core homes and newer subdivision builds both fit the same form." },
      { title: "We review the numbers", text: "The purchase, the resale, and the paperwork get reviewed with the title company. Questions get answered before closing day, not at the table." },
      { title: "Funding closes your purchase", text: "On closing day the funds for your purchase side are wired. Your resale closes right after, the funds and fee come out of the proceeds, and the spread is yours." }
    ],
    faqs: [
      { q: "Do you fund double closings in Midlothian?", a: "Yes. Deals across Midlothian fit, from the older streets near US-287 to the newer subdivisions on every side of town. Single family homes work when the numbers do." },
      { q: "What kinds of Midlothian properties work for a double closing?", a: "Most Midlothian wholesale deals are mid-century homes in the older core and dated homes in the first growth-wave subdivisions. End buyers renovate them for commuters working the southern metro." },
      { q: "What is a double closing?", a: "A double closing is two back to back transactions on the same property on the same day. You buy the home from the seller, take title, and immediately resell it to your end buyer. Because you take title in between, your purchase price and your resale price stay on separate closing statements instead of one assignment contract." },
      { q: "How fast can funding be ready?", a: "Funding can be ready in as little as 24 hours once we have the deal details and the title company information. Files with complete paperwork move fastest, so send everything you have when you submit the form." },
      { q: "What does double close funding cost?", a: "Fees follow the schedule on this page: {{tier1Rate}} on deals up to {{tier1Cap}} with a {{tier1Minimum}} minimum, {{tier2Rate}} from {{tier1Cap}} to {{tier2Cap}}, and {{tier3Rate}} from {{tier2Cap}} to {{fundingMax}}. Extra days, a second closing company, or special paperwork carry the additional fees listed in the schedule." },
      { q: "Can you fund EMD or a Morby Method deal?", a: "Yes. Earnest money deposits and Morby Method structures are part of what we fund. Morby Method fees are paid upfront by Zelle or wire, as listed in the fee schedule above." }
    ],
    nearby: ["waxahachie", "cedar-hill", "mansfield"],
    blurb: "Cement town turned growth suburb. Mid-century core homes and first-wave subdivisions for southern-metro commuters."
  },
  {
    slug: "cleburne",
    name: "Cleburne",
    state: "TX",
    stateName: "Texas",
    county: "Johnson County",
    formName: FORM,
    title: "Double Close Funding in Cleburne, TX | Transactional Funding",
    description: "Double close funding for Cleburne, TX wholesalers. Railroad-town homes near the courthouse square. Fees from {{tier1Rate}}.",
    h1Bottom: "in Cleburne, Texas",
    hero: "Cleburne grew up as a Santa Fe railroad town, and its neighborhoods still carry that history. The streets around the courthouse square hold early century and postwar homes at some of the metro area's lowest entry prices, and Lake Pat Cleburne adds a recreation draw on the edge of town. Commuters reach south Fort Worth up the Chisholm Trail Parkway, so renovated homes resell to buyers trading drive time for price. DFW Wholesale Double Close connects you with transactional funding for Cleburne deals. You take title with the funder's money, resell to your end buyer the same day, and your spread stays off a single assignment contract. Submit your Cleburne deal through the form and funding can be ready in as little as 24 hours.",
    localNoteTitle: "How double closings work in Cleburne",
    localNote: "Texas closings typically run through a title company, and most investor files close with the title company the end buyer already uses. Texas charges no state transfer tax, and title insurance premium rates are set at the state level, so the premium itself does not change between title companies while other fees vary by office. Cleburne's older homes often involve pier and beam foundations and estate paperwork. Deeds record with the Johnson County clerk. The title company can confirm anything property specific.",
    whyHeading: "Why Cleburne wholesalers use us",
    why: [
      "Cleburne's low entry prices let you run multiple deals at once, and its railroad-town stock gives renovators a product with real character. A double closing keeps your capital rotating instead of parked in a single low-dollar purchase.",
      "We connect you with transactional funding for the purchase side of your deal so you can take title and resell the same day. Your seller sees a clean cash purchase, your buyer sees a normal sale, and your wholesale spread stays between the two closing statements instead of on an assignment contract.",
      "The fee schedule is published on this page and stays flat across every city and county in the metro. You can underwrite the funding cost into your offer before you tie up the property, and there are no surprise charges at the closing table."
    ],
    steps: [
      { title: "Submit your deal", text: "Send the property address, your contract price, the resale price, and the title company handling the file. Homes near the square and streets toward the lake both fit the same form." },
      { title: "We review the numbers", text: "The purchase, the resale, and the paperwork get reviewed with the title company. Questions get answered before closing day, not at the table." },
      { title: "Funding closes your purchase", text: "On closing day the funds for your purchase side are wired. Your resale closes right after, the funds and fee come out of the proceeds, and the spread is yours." }
    ],
    faqs: [
      { q: "Do you fund double closings in Cleburne?", a: "Yes. Deals across Cleburne fit, from the neighborhoods around the courthouse square to the streets near Lake Pat Cleburne and the Chisholm Trail Parkway. Single family homes work when the numbers do." },
      { q: "What kinds of Cleburne properties work for a double closing?", a: "Most Cleburne wholesale deals are early century and postwar single family homes with dated interiors. End buyers renovate them for buyers trading the commute for price, or hold them as rentals for the local workforce." },
      { q: "What is a double closing?", a: "A double closing is two back to back transactions on the same property on the same day. You buy the home from the seller, take title, and immediately resell it to your end buyer. Because you take title in between, your purchase price and your resale price stay on separate closing statements instead of one assignment contract." },
      { q: "How fast can funding be ready?", a: "Funding can be ready in as little as 24 hours once we have the deal details and the title company information. Files with complete paperwork move fastest, so send everything you have when you submit the form." },
      { q: "What does double close funding cost?", a: "Fees follow the schedule on this page: {{tier1Rate}} on deals up to {{tier1Cap}} with a {{tier1Minimum}} minimum, {{tier2Rate}} from {{tier1Cap}} to {{tier2Cap}}, and {{tier3Rate}} from {{tier2Cap}} to {{fundingMax}}. Extra days, a second closing company, or special paperwork carry the additional fees listed in the schedule." },
      { q: "Can you fund EMD or a Morby Method deal?", a: "Yes. Earnest money deposits and Morby Method structures are part of what we fund. Morby Method fees are paid upfront by Zelle or wire, as listed in the fee schedule above." }
    ],
    nearby: ["burleson", "fort-worth", "waxahachie"],
    blurb: "A Santa Fe railroad town. Low entry prices and character homes for buyers trading drive time for price."
  },
  {
    slug: "burleson",
    name: "Burleson",
    state: "TX",
    stateName: "Texas",
    county: "Johnson County",
    formName: FORM,
    title: "Double Close Funding in Burleson, TX | Transactional Funding",
    description: "Double close funding for Burleson, TX wholesalers. Old Town streets to new subdivisions on I-35W. Fees from {{tier1Rate}}.",
    h1Bottom: "in Burleson, Texas",
    hero: "Burleson has grown from a railroad stop into one of the southern metro's busiest family suburbs. The streets around Old Town hold older homes with small-town bones, while subdivisions have filled the land along I-35W for decades. Renovated homes resell to families who want the schools and the Chisholm Trail Parkway commute into Fort Worth, and dated properties in the older sections keep surfacing as estates change hands. DFW Wholesale Double Close connects you with transactional funding for Burleson deals. You take title with the funder's money, resell to your end buyer the same day, and your markup stays off a single assignment contract. Submit your Burleson deal through the form and funding can be ready in as little as 24 hours.",
    localNoteTitle: "How double closings work in Burleson",
    localNote: "Texas closings typically run through a title company, and most investor files close with the title company the end buyer already uses. Texas charges no state transfer tax, and title insurance premium rates are set at the state level, so the premium itself does not change between title companies while other fees vary by office. Burleson spans Johnson and Tarrant counties, so the deed records with the county clerk where the property actually sits. The newer subdivisions carry HOA resale certificates. The title company can confirm the county and anything else property specific.",
    whyHeading: "Why Burleson wholesalers use us",
    why: [
      "Burleson's family-driven resale market rewards clean, renovated product, and its older sections keep supplying it. A double closing lets you convert that supply into same day spreads without your own cash in escrow.",
      "We connect you with transactional funding for the purchase side of your deal so you can take title and resell the same day. Your seller sees a clean cash purchase, your buyer sees a normal sale, and your wholesale spread stays between the two closing statements instead of on an assignment contract.",
      "The fee schedule is published on this page and stays flat across every city and county in the metro. You can underwrite the funding cost into your offer before you tie up the property, and there are no surprise charges at the closing table."
    ],
    steps: [
      { title: "Submit your deal", text: "Send the property address, your contract price, the resale price, and the title company handling the file. Old Town homes and I-35W corridor subdivisions both fit the same form." },
      { title: "We review the numbers", text: "The purchase, the resale, and the paperwork get reviewed with the title company. Questions get answered before closing day, not at the table." },
      { title: "Funding closes your purchase", text: "On closing day the funds for your purchase side are wired. Your resale closes right after, the funds and fee come out of the proceeds, and the spread is yours." }
    ],
    faqs: [
      { q: "Do you fund double closings in Burleson?", a: "Yes. Deals across Burleson fit, from the streets around Old Town to the subdivisions along I-35W and the Chisholm Trail Parkway. Single family homes work when the numbers do." },
      { q: "What kinds of Burleson properties work for a double closing?", a: "Most Burleson wholesale deals are older homes near the town center and dated homes in the first-wave subdivisions. End buyers renovate them for families commuting into Fort Worth." },
      { q: "What is a double closing?", a: "A double closing is two back to back transactions on the same property on the same day. You buy the home from the seller, take title, and immediately resell it to your end buyer. Because you take title in between, your purchase price and your resale price stay on separate closing statements instead of one assignment contract." },
      { q: "How fast can funding be ready?", a: "Funding can be ready in as little as 24 hours once we have the deal details and the title company information. Files with complete paperwork move fastest, so send everything you have when you submit the form." },
      { q: "What does double close funding cost?", a: "Fees follow the schedule on this page: {{tier1Rate}} on deals up to {{tier1Cap}} with a {{tier1Minimum}} minimum, {{tier2Rate}} from {{tier1Cap}} to {{tier2Cap}}, and {{tier3Rate}} from {{tier2Cap}} to {{fundingMax}}. Extra days, a second closing company, or special paperwork carry the additional fees listed in the schedule." },
      { q: "Can you fund EMD or a Morby Method deal?", a: "Yes. Earnest money deposits and Morby Method structures are part of what we fund. Morby Method fees are paid upfront by Zelle or wire, as listed in the fee schedule above." }
    ],
    nearby: ["cleburne", "mansfield", "fort-worth"],
    blurb: "Railroad stop turned family suburb. Old Town bones and I-35W growth with a Fort Worth commute."
  },
  {
    slug: "rockwall",
    name: "Rockwall",
    state: "TX",
    stateName: "Texas",
    county: "Rockwall County",
    formName: FORM,
    title: "Double Close Funding in Rockwall, TX | Transactional Funding",
    description: "Double close funding for Rockwall, TX wholesalers. Historic square to the harbor district on Lake Ray Hubbard. Fees from {{tier1Rate}}.",
    h1Bottom: "in Rockwall, Texas",
    hero: "Rockwall packs a lot into Texas's smallest county. The streets near its historic downtown square hold older homes with character, established neighborhoods from the 1970s through 1990s fill the middle, and the harbor district on Lake Ray Hubbard anchors the premium end. Renovated homes resell to buyers who want the lake lifestyle and the I-30 commute into Dallas, and the town's reputation keeps demand deep. DFW Wholesale Double Close connects you with transactional funding for Rockwall deals. You take title with the funder's money, resell to your end buyer the same day, and your spread stays off a single assignment contract. Submit your Rockwall deal through the form and funding can be ready in as little as 24 hours.",
    localNoteTitle: "How double closings work in Rockwall",
    localNote: "Texas closings typically run through a title company, and most investor files close with the title company the end buyer already uses. Texas charges no state transfer tax, and title insurance premium rates are set at the state level, so the premium itself does not change between title companies while other fees vary by office. Homes near the lake can involve flood plain and elevation questions, and older properties near the square often carry pier and beam foundations. Deeds record with the Rockwall County clerk. The title company can confirm anything property specific.",
    whyHeading: "Why Rockwall wholesalers use us",
    why: [
      "Rockwall's lake-driven resale demand keeps renovated homes moving at strong prices. A double closing lets you capture that demand without your own cash sitting in a purchase between contracts.",
      "We connect you with transactional funding for the purchase side of your deal so you can take title and resell the same day. Your seller sees a clean cash purchase, your buyer sees a normal sale, and your wholesale spread stays between the two closing statements instead of on an assignment contract.",
      "The fee schedule is published on this page and stays flat across every city and county in the metro. You can underwrite the funding cost into your offer before you tie up the property, and there are no surprise charges at the closing table."
    ],
    steps: [
      { title: "Submit your deal", text: "Send the property address, your contract price, the resale price, and the title company handling the file. Homes near the square and streets toward the harbor both fit the same form." },
      { title: "We review the numbers", text: "The purchase, the resale, and the paperwork get reviewed with the title company. Questions get answered before closing day, not at the table." },
      { title: "Funding closes your purchase", text: "On closing day the funds for your purchase side are wired. Your resale closes right after, the funds and fee come out of the proceeds, and the spread is yours." }
    ],
    faqs: [
      { q: "Do you fund double closings in Rockwall?", a: "Yes. Deals across Rockwall fit, from the older neighborhoods near the historic square to the sections around the harbor district and along I-30. Single family homes and townhouses both work when the numbers do." },
      { q: "What kinds of Rockwall properties work for a double closing?", a: "Most Rockwall wholesale deals are 1970s through 1990s single family homes with dated interiors. End buyers renovate them for buyers who want the lake lifestyle and the I-30 commute." },
      { q: "What is a double closing?", a: "A double closing is two back to back transactions on the same property on the same day. You buy the home from the seller, take title, and immediately resell it to your end buyer. Because you take title in between, your purchase price and your resale price stay on separate closing statements instead of one assignment contract." },
      { q: "How fast can funding be ready?", a: "Funding can be ready in as little as 24 hours once we have the deal details and the title company information. Files with complete paperwork move fastest, so send everything you have when you submit the form." },
      { q: "What does double close funding cost?", a: "Fees follow the schedule on this page: {{tier1Rate}} on deals up to {{tier1Cap}} with a {{tier1Minimum}} minimum, {{tier2Rate}} from {{tier1Cap}} to {{tier2Cap}}, and {{tier3Rate}} from {{tier2Cap}} to {{fundingMax}}. Extra days, a second closing company, or special paperwork carry the additional fees listed in the schedule." },
      { q: "Can you fund EMD or a Morby Method deal?", a: "Yes. Earnest money deposits and Morby Method structures are part of what we fund. Morby Method fees are paid upfront by Zelle or wire, as listed in the fee schedule above." }
    ],
    nearby: ["rowlett", "garland", "wylie"],
    blurb: "Texas's smallest county, big lake demand. Historic square, established neighborhoods and the harbor district."
  },
  {
    slug: "forney",
    name: "Forney",
    state: "TX",
    stateName: "Texas",
    county: "Kaufman County",
    formName: FORM,
    title: "Double Close Funding in Forney, TX | Transactional Funding",
    description: "Double close funding for Forney, TX wholesalers. Historic downtown to fast-growing US-80 subdivisions. Fees from {{tier1Rate}}.",
    h1Bottom: "in Forney, Texas",
    hero: "Forney is Kaufman County's growth engine, straddling US-80 east of Dallas. The blocks around its historic downtown hold early century and postwar homes, while subdivisions like the communities along FM 548 have made it one of the metro's fastest-growing cities. Dated homes here attract renovators whose buyers want the small-town feel with a straight shot down US-80 or I-20 into Dallas, at entry prices well below the inner metro. DFW Wholesale Double Close connects you with transactional funding for Forney deals. You take title with the funder's money, resell to your end buyer the same day, and your markup stays off a single assignment contract. Submit your Forney deal through the form and funding can be ready in as little as 24 hours.",
    localNoteTitle: "How double closings work in Forney",
    localNote: "Texas closings typically run through a title company, and most investor files close with the title company the end buyer already uses. Texas charges no state transfer tax, and title insurance premium rates are set at the state level, so the premium itself does not change between title companies while other fees vary by office. Forney's rural-edge properties can involve survey and easement questions, and the newer subdivisions carry HOA resale certificates. Deeds record with the Kaufman County clerk. The title company can confirm anything property specific.",
    whyHeading: "Why Forney wholesalers use us",
    why: [
      "Forney's growth pulls resale buyers from the whole east metro, and its older stock keeps producing renovation candidates at accessible prices. A double closing lets you work that flow without your own capital committed between contracts.",
      "We connect you with transactional funding for the purchase side of your deal so you can take title and resell the same day. Your seller sees a clean cash purchase, your buyer sees a normal sale, and your wholesale spread stays between the two closing statements instead of on an assignment contract.",
      "The fee schedule is published on this page and stays flat across every city and county in the metro. You can underwrite the funding cost into your offer before you tie up the property, and there are no surprise charges at the closing table."
    ],
    steps: [
      { title: "Submit your deal", text: "Send the property address, your contract price, the resale price, and the title company handling the file. Downtown-area homes and FM 548 subdivisions both fit the same form." },
      { title: "We review the numbers", text: "The purchase, the resale, and the paperwork get reviewed with the title company. Questions get answered before closing day, not at the table." },
      { title: "Funding closes your purchase", text: "On closing day the funds for your purchase side are wired. Your resale closes right after, the funds and fee come out of the proceeds, and the spread is yours." }
    ],
    faqs: [
      { q: "Do you fund double closings in Forney?", a: "Yes. Deals across Forney fit, from the blocks around the historic downtown to the newer subdivisions along US-80 and FM 548. Single family homes work when the numbers do." },
      { q: "What kinds of Forney properties work for a double closing?", a: "Most Forney wholesale deals are early century through 1990s homes with dated interiors, plus occasional rural-edge properties. End buyers renovate them for buyers who want the town feel with the US-80 and I-20 commute." },
      { q: "What is a double closing?", a: "A double closing is two back to back transactions on the same property on the same day. You buy the home from the seller, take title, and immediately resell it to your end buyer. Because you take title in between, your purchase price and your resale price stay on separate closing statements instead of one assignment contract." },
      { q: "How fast can funding be ready?", a: "Funding can be ready in as little as 24 hours once we have the deal details and the title company information. Files with complete paperwork move fastest, so send everything you have when you submit the form." },
      { q: "What does double close funding cost?", a: "Fees follow the schedule on this page: {{tier1Rate}} on deals up to {{tier1Cap}} with a {{tier1Minimum}} minimum, {{tier2Rate}} from {{tier1Cap}} to {{tier2Cap}}, and {{tier3Rate}} from {{tier2Cap}} to {{fundingMax}}. Extra days, a second closing company, or special paperwork carry the additional fees listed in the schedule." },
      { q: "Can you fund EMD or a Morby Method deal?", a: "Yes. Earnest money deposits and Morby Method structures are part of what we fund. Morby Method fees are paid upfront by Zelle or wire, as listed in the fee schedule above." }
    ],
    nearby: ["mesquite", "rockwall", "greenville"],
    blurb: "Kaufman County's growth engine. Historic downtown blocks and booming US-80 subdivisions at accessible prices."
  },
  {
    slug: "weatherford",
    name: "Weatherford",
    state: "TX",
    stateName: "Texas",
    county: "Parker County",
    formName: FORM,
    title: "Double Close Funding in Weatherford, TX | Transactional Funding",
    description: "Double close funding for Weatherford, TX wholesalers. Courthouse square homes on the metro's western edge. Fees from {{tier1Rate}}.",
    h1Bottom: "in Weatherford, Texas",
    hero: "Weatherford anchors the metro's western edge, where Parker County meets I-20. The neighborhoods around its historic courthouse square hold early century and postwar homes with real character, and newer subdivisions keep arriving as growth pushes west from Fort Worth. Renovated homes resell to buyers who want the square's small-town center and an I-20 commute, at entry prices well below Tarrant County. DFW Wholesale Double Close connects you with transactional funding for Weatherford deals. You take title with the funder's money, resell to your end buyer the same day, and your spread stays off a single assignment contract. Submit your Weatherford deal through the form and funding can be ready in as little as 24 hours.",
    localNoteTitle: "How double closings work in Weatherford",
    localNote: "Texas closings typically run through a title company, and most investor files close with the title company the end buyer already uses. Texas charges no state transfer tax, and title insurance premium rates are set at the state level, so the premium itself does not change between title companies while other fees vary by office. Homes in Weatherford's historic districts can carry design guidelines, and rural-edge properties often involve well, septic or survey questions. Deeds record with the Parker County clerk. The title company can confirm anything property specific.",
    whyHeading: "Why Weatherford wholesalers use us",
    why: [
      "Weatherford's combination of character stock and western growth gives wholesalers margin on the right contracts. A double closing lets you take those contracts down without your own cash parked in the purchase.",
      "We connect you with transactional funding for the purchase side of your deal so you can take title and resell the same day. Your seller sees a clean cash purchase, your buyer sees a normal sale, and your wholesale spread stays between the two closing statements instead of on an assignment contract.",
      "The fee schedule is published on this page and stays flat across every city and county in the metro. You can underwrite the funding cost into your offer before you tie up the property, and there are no surprise charges at the closing table."
    ],
    steps: [
      { title: "Submit your deal", text: "Send the property address, your contract price, the resale price, and the title company handling the file. Homes near the square and newer I-20 corridor builds both fit the same form." },
      { title: "We review the numbers", text: "The purchase, the resale, and the paperwork get reviewed with the title company. Questions get answered before closing day, not at the table." },
      { title: "Funding closes your purchase", text: "On closing day the funds for your purchase side are wired. Your resale closes right after, the funds and fee come out of the proceeds, and the spread is yours." }
    ],
    faqs: [
      { q: "Do you fund double closings in Weatherford?", a: "Yes. Deals across Weatherford fit, from the neighborhoods around the historic courthouse square to the newer subdivisions along I-20 and US-180. Single family homes work when the numbers do." },
      { q: "What kinds of Weatherford properties work for a double closing?", a: "Most Weatherford wholesale deals are early century and postwar single family homes with dated interiors, plus rural-edge properties on larger lots. End buyers renovate them for buyers who want the square's character and the I-20 commute." },
      { q: "What is a double closing?", a: "A double closing is two back to back transactions on the same property on the same day. You buy the home from the seller, take title, and immediately resell it to your end buyer. Because you take title in between, your purchase price and your resale price stay on separate closing statements instead of one assignment contract." },
      { q: "How fast can funding be ready?", a: "Funding can be ready in as little as 24 hours once we have the deal details and the title company information. Files with complete paperwork move fastest, so send everything you have when you submit the form." },
      { q: "What does double close funding cost?", a: "Fees follow the schedule on this page: {{tier1Rate}} on deals up to {{tier1Cap}} with a {{tier1Minimum}} minimum, {{tier2Rate}} from {{tier1Cap}} to {{tier2Cap}}, and {{tier3Rate}} from {{tier2Cap}} to {{fundingMax}}. Extra days, a second closing company, or special paperwork carry the additional fees listed in the schedule." },
      { q: "Can you fund EMD or a Morby Method deal?", a: "Yes. Earnest money deposits and Morby Method structures are part of what we fund. Morby Method fees are paid upfront by Zelle or wire, as listed in the fee schedule above." }
    ],
    nearby: ["fort-worth", "cleburne", "burleson"],
    blurb: "The western anchor. Historic courthouse square character at prices well below Tarrant County."
  },
  {
    slug: "greenville",
    name: "Greenville",
    state: "TX",
    stateName: "Texas",
    county: "Hunt County",
    formName: FORM,
    title: "Double Close Funding in Greenville, TX | Transactional Funding",
    description: "Double close funding for Greenville, TX wholesalers. Cotton-town homes on the I-30 corridor east of the metro. Fees from {{tier1Rate}}.",
    h1Bottom: "in Greenville, Texas",
    hero: "Greenville is Hunt County's seat and the I-30 corridor's eastern hub, a former cotton town whose neighborhoods are full of early century and postwar homes at some of the metro area's lowest entry prices. Growth spilling east from Rockwall and the new development along I-30 keep pulling buyers outward, and renovated homes resell to families and workers tied to the corridor's employers. DFW Wholesale Double Close connects you with transactional funding for Greenville deals. You take title with the funder's money, resell to your end buyer the same day, and your markup stays off a single assignment contract. Submit your Greenville deal through the form and funding can be ready in as little as 24 hours.",
    localNoteTitle: "How double closings work in Greenville",
    localNote: "Texas closings typically run through a title company, and most investor files close with the title company the end buyer already uses. Texas charges no state transfer tax, and title insurance premium rates are set at the state level, so the premium itself does not change between title companies while other fees vary by office. Greenville's older homes often involve pier and beam foundations and estate paperwork. Deeds record with the Hunt County clerk. The title company can confirm anything property specific.",
    whyHeading: "Why Greenville wholesalers use us",
    why: [
      "Greenville's low entry prices and corridor growth make it a volume market for wholesalers willing to work the east side of the metro. A double closing keeps your capital rotating across multiple low-dollar deals instead of locking it into one.",
      "We connect you with transactional funding for the purchase side of your deal so you can take title and resell the same day. Your seller sees a clean cash purchase, your buyer sees a normal sale, and your wholesale spread stays between the two closing statements instead of on an assignment contract.",
      "The fee schedule is published on this page and stays flat across every city and county in the metro. You can underwrite the funding cost into your offer before you tie up the property, and there are no surprise charges at the closing table."
    ],
    steps: [
      { title: "Submit your deal", text: "Send the property address, your contract price, the resale price, and the title company handling the file. Homes near the downtown and streets along I-30 both fit the same form." },
      { title: "We review the numbers", text: "The purchase, the resale, and the paperwork get reviewed with the title company. Questions get answered before closing day, not at the table." },
      { title: "Funding closes your purchase", text: "On closing day the funds for your purchase side are wired. Your resale closes right after, the funds and fee come out of the proceeds, and the spread is yours." }
    ],
    faqs: [
      { q: "Do you fund double closings in Greenville?", a: "Yes. Deals across Greenville fit, from the neighborhoods near the downtown to the streets along I-30 and the newer sections on the edge of town. Single family homes work when the numbers do." },
      { q: "What kinds of Greenville properties work for a double closing?", a: "Most Greenville wholesale deals are early century and postwar single family homes with dated interiors. End buyers renovate them for local families and corridor workers, or hold them as rentals." },
      { q: "What is a double closing?", a: "A double closing is two back to back transactions on the same property on the same day. You buy the home from the seller, take title, and immediately resell it to your end buyer. Because you take title in between, your purchase price and your resale price stay on separate closing statements instead of one assignment contract." },
      { q: "How fast can funding be ready?", a: "Funding can be ready in as little as 24 hours once we have the deal details and the title company information. Files with complete paperwork move fastest, so send everything you have when you submit the form." },
      { q: "What does double close funding cost?", a: "Fees follow the schedule on this page: {{tier1Rate}} on deals up to {{tier1Cap}} with a {{tier1Minimum}} minimum, {{tier2Rate}} from {{tier1Cap}} to {{tier2Cap}}, and {{tier3Rate}} from {{tier2Cap}} to {{fundingMax}}. Extra days, a second closing company, or special paperwork carry the additional fees listed in the schedule." },
      { q: "Can you fund EMD or a Morby Method deal?", a: "Yes. Earnest money deposits and Morby Method structures are part of what we fund. Morby Method fees are paid upfront by Zelle or wire, as listed in the fee schedule above." }
    ],
    nearby: ["rockwall", "forney", "rowlett"],
    blurb: "The I-30 corridor's eastern hub. Cotton-town stock at the metro area's lowest entry prices."
  }
];

export const cities: City[] = rawCities;
