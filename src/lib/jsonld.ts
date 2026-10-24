/**
 * Centralized JSON-LD Schemas (Schema.org Structured Data)
 * 
 * Contains all page-level JSON-LD schemas for search engines (Google, Bing).
 * Import the relevant schema into each page and render with <JsonLd schema={...} />.
 */

// 1. Home Page JSON-LD (Graph: FinancialService, Person, WebSite, WebPage, OfferCatalog)
export const homePageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FinancialService",
      "@id": "https://workwithnelly.com/#business",
      "name": "Nelly Santiesteban - Mortgage Loan Officer",
      "alternateName": "Work With Nelly",
      "description": "Miami-based mortgage loan officer helping homebuyers across Florida with FHA, conventional, self-employed, investor, ITIN and foreign national loans. Bilingual in English and Spanish.",
      "url": "https://workwithnelly.com",
      "logo": "https://www.workwithnelly.com/assets/nelly_mark.png",
      "image": "https://www.workwithnelly.com/assets/nelly_headshot_new.jpg",
      "telephone": "+1-786-286-5906",
      "email": "workwithnelly1@gmail.com",
      "areaServed": [
        {
          "@type": "City",
          "name": "Miami",
        },
        {
          "@type": "State",
          "name": "Florida",
        },
      ],
      "knowsLanguage": [
        "English",
        "Spanish",
      ],
      "knowsAbout": [
        "FHA loans",
        "Conventional loans",
        "Self-employed mortgage programs",
        "DSCR investment loans",
        "ITIN loans",
        "Foreign national mortgage loans",
        "Mortgage refinance",
      ],
      "identifier": {
        "@type": "PropertyValue",
        "propertyID": "NMLS",
        "value": "1808120",
      },
      "parentOrganization": {
        "@type": "Organization",
        "name": "ACE Florida Mortgage",
        "identifier": {
          "@type": "PropertyValue",
          "propertyID": "NMLS",
          "value": "2384013",
        },
      },
      "founder": {
        "@id": "https://workwithnelly.com/#nelly",
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "telephone": "+1-786-286-5906",
        "email": "workwithnelly1@gmail.com",
        "availableLanguage": [
          "English",
          "Spanish",
        ],
      },
      "sameAs": [
        "https://www.instagram.com/workwithnelly/",
        "https://www.facebook.com/workwithnelly/",
        "https://www.linkedin.com/in/nelly-santiesteban-17613832/",
        "https://www.zillow.com/lender-profile/workwithnelly/",
      ],
    },
    {
      "@type": "Person",
      "@id": "https://workwithnelly.com/#nelly",
      "name": "Nelly Santiesteban",
      "jobTitle": "Mortgage Loan Officer",
      "description": "Mortgage loan officer in Miami, FL, helping clients with home financing since 2005.",
      "image": "https://www.workwithnelly.com/assets/nelly_headshot_new.jpg",
      "url": "https://workwithnelly.com/mortgage-loan-officer-miami",
      "telephone": "+1-786-286-5906",
      "email": "workwithnelly1@gmail.com",
      "knowsLanguage": [
        "English",
        "Spanish",
      ],
      "identifier": {
        "@type": "PropertyValue",
        "propertyID": "NMLS",
        "value": "1808120",
      },
      "worksFor": {
        "@id": "https://workwithnelly.com/#business",
      },
      "sameAs": [
        "https://www.linkedin.com/in/nelly-santiesteban-17613832/",
        "https://www.zillow.com/lender-profile/workwithnelly/",
        "https://www.instagram.com/workwithnelly/",
        "https://www.facebook.com/workwithnelly/",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://workwithnelly.com/#website",
      "url": "https://workwithnelly.com",
      "name": "Work With Nelly",
      "inLanguage": "en-US",
      "publisher": {
        "@id": "https://workwithnelly.com/#business",
      },
    },
    {
      "@type": "WebPage",
      "@id": "https://workwithnelly.com#webpage",
      "url": "https://workwithnelly.com",
      "name": "Mortgage Loans Miami | Nelly Santiesteban",
      "description": "Miami mortgage loan officer helping buyers since 2005. FHA, conventional, self-employed & ITIN loans. Se habla español. Call (786) 286-5906 or apply today.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://workwithnelly.com/#website",
      },
      "about": {
        "@id": "https://workwithnelly.com/#business",
      },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://www.workwithnelly.com/assets/nelly_hero_house.jpg",
      },
    },
    {
      "@type": "OfferCatalog",
      "@id": "https://workwithnelly.com/#loan-catalog",
      "name": "Mortgage Loan Programs",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "name": "Home Purchase",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Conventional Loans",
              },
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "FHA Loans",
              },
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "VA Loans",
              },
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "USDA Loans",
              },
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Jumbo Loans",
              },
            },
          ],
        },
        {
          "@type": "OfferCatalog",
          "name": "Self-Employed & Alternative Income",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Bank Statement Loans",
              },
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "1099 / P&L Programs",
              },
            },
          ],
        },
        {
          "@type": "OfferCatalog",
          "name": "Investors",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "DSCR Investment Loans",
              },
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Fix & Flip Loans",
              },
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Bridge Loans",
              },
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Non-Warrantable Condo Loans",
              },
            },
          ],
        },
        {
          "@type": "OfferCatalog",
          "name": "Specialty Loans",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "ITIN Loans",
              },
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Foreign National Loans",
              },
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Construction / One-Time Close Loans",
              },
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Reverse Mortgage",
              },
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Commercial Loans",
              },
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Vacant Land Loans",
              },
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "SBA Loans",
              },
            },
          ],
        },
      ],
    },
  ],
};

// 2. FHA Loans Miami JSON-LD (Graph: FinancialService, Person, WebSite, WebPage, BreadcrumbList, Service, FAQPage)
export const fhaLoansJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FinancialService",
      "@id": "https://workwithnelly.com/#business",
      "name": "Nelly Santiesteban - Mortgage Loan Officer",
      "alternateName": "Work With Nelly",
      "description": "Miami-based mortgage loan officer helping homebuyers across Florida with FHA, conventional, self-employed, investor, ITIN and foreign national loans. Bilingual in English and Spanish.",
      "url": "https://workwithnelly.com",
      "logo": "https://www.workwithnelly.com/assets/nelly_mark.png",
      "image": "https://www.workwithnelly.com/assets/nelly_headshot_new.jpg",
      "telephone": "+1-786-286-5906",
      "email": "workwithnelly1@gmail.com",
      "areaServed": [
        {
          "@type": "City",
          "name": "Miami",
        },
        {
          "@type": "State",
          "name": "Florida",
        },
      ],
      "knowsLanguage": [
        "English",
        "Spanish",
      ],
      "knowsAbout": [
        "FHA loans",
        "Conventional loans",
        "Self-employed mortgage programs",
        "DSCR investment loans",
        "ITIN loans",
        "Foreign national mortgage loans",
        "Mortgage refinance",
      ],
      "identifier": {
        "@type": "PropertyValue",
        "propertyID": "NMLS",
        "value": "1808120",
      },
      "parentOrganization": {
        "@type": "Organization",
        "name": "ACE Florida Mortgage",
        "identifier": {
          "@type": "PropertyValue",
          "propertyID": "NMLS",
          "value": "2384013",
        },
      },
      "founder": {
        "@id": "https://workwithnelly.com/#nelly",
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "telephone": "+1-786-286-5906",
        "email": "workwithnelly1@gmail.com",
        "availableLanguage": [
          "English",
          "Spanish",
        ],
      },
      "sameAs": [
        "https://www.instagram.com/workwithnelly/",
        "https://www.facebook.com/workwithnelly/",
        "https://www.linkedin.com/in/nelly-santiesteban-17613832/",
        "https://www.zillow.com/lender-profile/workwithnelly/",
      ],
    },
    {
      "@type": "Person",
      "@id": "https://workwithnelly.com/#nelly",
      "name": "Nelly Santiesteban",
      "jobTitle": "Mortgage Loan Officer",
      "description": "Mortgage loan officer in Miami, FL, helping clients with home financing since 2005.",
      "image": "https://www.workwithnelly.com/assets/nelly_headshot_new.jpg",
      "url": "https://workwithnelly.com/mortgage-loan-officer-miami",
      "telephone": "+1-786-286-5906",
      "email": "workwithnelly1@gmail.com",
      "knowsLanguage": [
        "English",
        "Spanish",
      ],
      "identifier": {
        "@type": "PropertyValue",
        "propertyID": "NMLS",
        "value": "1808120",
      },
      "worksFor": {
        "@id": "https://workwithnelly.com/#business",
      },
      "sameAs": [
        "https://www.linkedin.com/in/nelly-santiesteban-17613832/",
        "https://www.zillow.com/lender-profile/workwithnelly/",
        "https://www.instagram.com/workwithnelly/",
        "https://www.facebook.com/workwithnelly/",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://workwithnelly.com/#website",
      "url": "https://workwithnelly.com",
      "name": "Work With Nelly",
      "inLanguage": "en-US",
      "publisher": {
        "@id": "https://workwithnelly.com/#business",
      },
    },
    {
      "@type": "WebPage",
      "@id": "https://workwithnelly.com/fha-loans-miami#webpage",
      "url": "https://workwithnelly.com/fha-loans-miami",
      "name": "FHA Loans in Miami | Nelly Santiesteban",
      "description": "FHA home loans in Miami and across Florida with down payments as low as 3.5%, including FHA options for self-employed borrowers.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://workwithnelly.com/#website",
      },
      "about": {
        "@id": "https://workwithnelly.com/#business",
      },
      "breadcrumb": {
        "@id": "https://workwithnelly.com/fha-loans-miami#breadcrumb",
      },
      "mainEntity": {
        "@id": "https://workwithnelly.com/fha-loans-miami#service",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://workwithnelly.com/fha-loans-miami#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://workwithnelly.com",
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "FHA Loans Miami",
          "item": "https://workwithnelly.com/fha-loans-miami",
        },
      ],
    },
    {
      "@type": "Service",
      "@id": "https://workwithnelly.com/fha-loans-miami#service",
      "name": "FHA Loans in Miami",
      "serviceType": "FHA Mortgage Loan",
      "description": "FHA home loans in Miami and across Florida, with down payments as low as 3.5%, including an FHA P&L program for self-employed borrowers.",
      "url": "https://workwithnelly.com/fha-loans-miami",
      "provider": {
        "@id": "https://workwithnelly.com/#business",
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Miami",
        },
        {
          "@type": "State",
          "name": "Florida",
        },
      ],
      "audience": {
        "@type": "Audience",
        "audienceType": "Homebuyers",
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://workwithnelly.com/fha-loans-miami#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is an FHA loan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "An FHA loan is a mortgage insured by the Federal Housing Administration that is offered through participating lenders. It may provide financing options for eligible homebuyers who meet the applicable requirements.",
          },
        },
        {
          "@type": "Question",
          "name": "How much down payment is required for an FHA loan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Eligible borrowers may qualify for a down payment as low as 3.5%, depending on their credit score and other FHA requirements. Additional costs and eligibility conditions apply.",
          },
        },
        {
          "@type": "Question",
          "name": "Can first-time homebuyers apply for FHA loans in Miami?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Eligible first-time homebuyers can apply for FHA loans. Approval depends on factors such as credit, income, debts, property eligibility, and lender requirements.",
          },
        },
        {
          "@type": "Question",
          "name": "How can I get started with an FHA loan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Contact Nelly Santiesteban to discuss your homebuying goals, understand FHA loan requirements, and learn about the mortgage pre-approval process.",
          },
        },
      ],
    },
  ],
};

// 3. Home Loans Miami JSON-LD (Graph: FinancialService, Person, WebSite, WebPage, BreadcrumbList, Service, FAQPage)
export const homeLoansJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FinancialService",
      "@id": "https://workwithnelly.com/#business",
      "name": "Nelly Santiesteban - Mortgage Loan Officer",
      "alternateName": "Work With Nelly",
      "description": "Miami-based mortgage loan officer helping homebuyers across Florida with FHA, conventional, self-employed, investor, ITIN and foreign national loans. Bilingual in English and Spanish.",
      "url": "https://workwithnelly.com",
      "logo": "https://www.workwithnelly.com/assets/nelly_mark.png",
      "image": "https://www.workwithnelly.com/assets/nelly_headshot_new.jpg",
      "telephone": "+1-786-286-5906",
      "email": "workwithnelly1@gmail.com",
      "areaServed": [
        {
          "@type": "City",
          "name": "Miami",
        },
        {
          "@type": "State",
          "name": "Florida",
        },
      ],
      "knowsLanguage": [
        "English",
        "Spanish",
      ],
      "knowsAbout": [
        "FHA loans",
        "Conventional loans",
        "Self-employed mortgage programs",
        "DSCR investment loans",
        "ITIN loans",
        "Foreign national mortgage loans",
        "Mortgage refinance",
      ],
      "identifier": {
        "@type": "PropertyValue",
        "propertyID": "NMLS",
        "value": "1808120",
      },
      "parentOrganization": {
        "@type": "Organization",
        "name": "ACE Florida Mortgage",
        "identifier": {
          "@type": "PropertyValue",
          "propertyID": "NMLS",
          "value": "2384013",
        },
      },
      "founder": {
        "@id": "https://workwithnelly.com/#nelly",
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "telephone": "+1-786-286-5906",
        "email": "workwithnelly1@gmail.com",
        "availableLanguage": [
          "English",
          "Spanish",
        ],
      },
      "sameAs": [
        "https://www.instagram.com/workwithnelly/",
        "https://www.facebook.com/workwithnelly/",
        "https://www.linkedin.com/in/nelly-santiesteban-17613832/",
        "https://www.zillow.com/lender-profile/workwithnelly/",
      ],
    },
    {
      "@type": "Person",
      "@id": "https://workwithnelly.com/#nelly",
      "name": "Nelly Santiesteban",
      "jobTitle": "Mortgage Loan Officer",
      "description": "Mortgage loan officer in Miami, FL, helping clients with home financing since 2005.",
      "image": "https://www.workwithnelly.com/assets/nelly_headshot_new.jpg",
      "url": "https://workwithnelly.com/mortgage-loan-officer-miami",
      "telephone": "+1-786-286-5906",
      "email": "workwithnelly1@gmail.com",
      "knowsLanguage": [
        "English",
        "Spanish",
      ],
      "identifier": {
        "@type": "PropertyValue",
        "propertyID": "NMLS",
        "value": "1808120",
      },
      "worksFor": {
        "@id": "https://workwithnelly.com/#business",
      },
      "sameAs": [
        "https://www.linkedin.com/in/nelly-santiesteban-17613832/",
        "https://www.zillow.com/lender-profile/workwithnelly/",
        "https://www.instagram.com/workwithnelly/",
        "https://www.facebook.com/workwithnelly/",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://workwithnelly.com/#website",
      "url": "https://workwithnelly.com",
      "name": "Work With Nelly",
      "inLanguage": "en-US",
      "publisher": {
        "@id": "https://workwithnelly.com/#business",
      },
    },
    {
      "@type": "WebPage",
      "@id": "https://workwithnelly.com/home-loans-miami#webpage",
      "url": "https://workwithnelly.com/home-loans-miami",
      "name": "Home Loans in Miami | Nelly Santiesteban",
      "description": "Home purchase financing in Miami and across Florida: conventional, FHA, VA, USDA and jumbo loans for first-time and repeat buyers.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://workwithnelly.com/#website"
      },
      "about": {
        "@id": "https://workwithnelly.com/#business"
      },
      "breadcrumb": {
        "@id": "https://workwithnelly.com/home-loans-miami#breadcrumb"
      },
      "mainEntity": {
        "@id": "https://workwithnelly.com/home-loans-miami#service"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://workwithnelly.com/home-loans-miami#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://workwithnelly.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Home Loans Miami",
          "item": "https://workwithnelly.com/home-loans-miami"
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://workwithnelly.com/home-loans-miami#service",
      "name": "Home Loans in Miami",
      "serviceType": "Home Purchase Mortgage",
      "description": "Home purchase financing for first-time buyers, move-up buyers, investors and self-employed borrowers across Miami and Florida.",
      "url": "https://workwithnelly.com/home-loans-miami",
      "provider": {
        "@id": "https://workwithnelly.com/#business"
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Miami"
        },
        {
          "@type": "State",
          "name": "Florida"
        }
      ],
      "audience": {
        "@type": "Audience",
        "audienceType": "First-time homebuyers, repeat buyers, real estate investors, self-employed borrowers"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Home Loans in Miami",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Conventional Loans"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "FHA Loans"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "VA Loans"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "USDA Loans"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Jumbo Loans"
            }
          }
        ]
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://workwithnelly.com/home-loans-miami#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What home loan options are available in Miami?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Eligible borrowers may be able to explore conventional, FHA, VA, jumbo, and other mortgage programs depending on their circumstances and lender requirements.",
          },
        },
        {
          "@type": "Question",
          "name": "Can first-time home buyers get a home loan in Miami?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Eligible first-time buyers may qualify for different mortgage programs. Qualification depends on factors such as income, credit profile, down payment, and program requirements.",
          },
        },
        {
          "@type": "Question",
          "name": "How can I get started with a home loan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Contact Nelly Santiesteban to discuss your homeownership goals, review potential mortgage options, and understand the pre-approval process.",
          },
        },
        {
          "@type": "Question",
          "name": "Do I need mortgage pre-approval before buying a home?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pre-approval can help you understand your estimated borrowing capacity before making an offer. Final approval depends on the lender's review of your application and property.",
          },
        },
      ],
    },
  ],
};

// 4. Mortgage Loan Officer Miami JSON-LD (Graph: FinancialService, Person, WebSite, ProfilePage, BreadcrumbList, FAQPage)
export const mortgageOfficerJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FinancialService",
      "@id": "https://workwithnelly.com/#business",
      "name": "Nelly Santiesteban - Mortgage Loan Officer",
      "alternateName": "Work With Nelly",
      "description": "Miami-based mortgage loan officer helping homebuyers across Florida with FHA, conventional, self-employed, investor, ITIN and foreign national loans. Bilingual in English and Spanish.",
      "url": "https://workwithnelly.com",
      "logo": "https://www.workwithnelly.com/assets/nelly_mark.png",
      "image": "https://www.workwithnelly.com/assets/nelly_headshot_new.jpg",
      "telephone": "+1-786-286-5906",
      "email": "workwithnelly1@gmail.com",
      "areaServed": [
        {
          "@type": "City",
          "name": "Miami",
        },
        {
          "@type": "State",
          "name": "Florida",
        },
      ],
      "knowsLanguage": [
        "English",
        "Spanish",
      ],
      "knowsAbout": [
        "FHA loans",
        "Conventional loans",
        "Self-employed mortgage programs",
        "DSCR investment loans",
        "ITIN loans",
        "Foreign national mortgage loans",
        "Mortgage refinance",
      ],
      "identifier": {
        "@type": "PropertyValue",
        "propertyID": "NMLS",
        "value": "1808120",
      },
      "parentOrganization": {
        "@type": "Organization",
        "name": "ACE Florida Mortgage",
        "identifier": {
          "@type": "PropertyValue",
          "propertyID": "NMLS",
          "value": "2384013",
        },
      },
      "founder": {
        "@id": "https://workwithnelly.com/#nelly",
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "telephone": "+1-786-286-5906",
        "email": "workwithnelly1@gmail.com",
        "availableLanguage": [
          "English",
          "Spanish",
        ],
      },
      "sameAs": [
        "https://www.instagram.com/workwithnelly/",
        "https://www.facebook.com/workwithnelly/",
        "https://www.linkedin.com/in/nelly-santiesteban-17613832/",
        "https://www.zillow.com/lender-profile/workwithnelly/",
      ],
    },
    {
      "@type": "Person",
      "@id": "https://workwithnelly.com/#nelly",
      "name": "Nelly Santiesteban",
      "jobTitle": "Mortgage Loan Officer",
      "description": "Mortgage loan officer in Miami, FL, helping clients with home financing since 2005.",
      "image": "https://www.workwithnelly.com/assets/nelly_headshot_new.jpg",
      "url": "https://workwithnelly.com/mortgage-loan-officer-miami",
      "telephone": "+1-786-286-5906",
      "email": "workwithnelly1@gmail.com",
      "knowsLanguage": [
        "English",
        "Spanish",
      ],
      "identifier": {
        "@type": "PropertyValue",
        "propertyID": "NMLS",
        "value": "1808120",
      },
      "worksFor": {
        "@id": "https://workwithnelly.com/#business",
      },
      "sameAs": [
        "https://www.linkedin.com/in/nelly-santiesteban-17613832/",
        "https://www.zillow.com/lender-profile/workwithnelly/",
        "https://www.instagram.com/workwithnelly/",
        "https://www.facebook.com/workwithnelly/",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://workwithnelly.com/#website",
      "url": "https://workwithnelly.com",
      "name": "Work With Nelly",
      "inLanguage": "en-US",
      "publisher": {
        "@id": "https://workwithnelly.com/#business",
      },
    },
    {
      "@type": "ProfilePage",
      "@id": "https://workwithnelly.com/mortgage-loan-officer-miami#webpage",
      "url": "https://workwithnelly.com/mortgage-loan-officer-miami",
      "name": "Mortgage Loan Officer in Miami | Nelly Santiesteban",
      "description": "Meet Nelly Santiesteban, NMLS #1808120, a bilingual Miami mortgage loan officer guiding buyers from pre-approval to closing since 2005.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://workwithnelly.com/#website",
      },
      "about": {
        "@id": "https://workwithnelly.com/#business",
      },
      "breadcrumb": {
        "@id": "https://workwithnelly.com/mortgage-loan-officer-miami#breadcrumb",
      },
      "mainEntity": {
        "@id": "https://workwithnelly.com/#nelly",
      },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://www.workwithnelly.com/assets/nelly_headshot_new.jpg",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://workwithnelly.com/mortgage-loan-officer-miami#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://workwithnelly.com",
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Mortgage Loan Officer Miami",
          "item": "https://workwithnelly.com/mortgage-loan-officer-miami",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://workwithnelly.com/mortgage-loan-officer-miami#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How can a mortgage loan officer help me?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A mortgage loan officer can explain financing options, mortgage requirements, and the application process based on your circumstances.",
          },
        },
        {
          "@type": "Question",
          "name": "Can I get help with mortgage pre-approval?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can discuss the pre-approval process and learn which financial documents your lender may require.",
          },
        },
        {
          "@type": "Question",
          "name": "How do I contact Nelly Santiesteban?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Use the contact section on the website to discuss your mortgage needs and learn about the next steps.",
          },
        },
      ],
    },
  ],
};

// 5. Contact Page JSON-LD (Graph: FinancialService, Person, WebSite, ContactPage, BreadcrumbList)
export const contactJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FinancialService",
      "@id": "https://workwithnelly.com/#business",
      "name": "Nelly Santiesteban - Mortgage Loan Officer",
      "alternateName": "Work With Nelly",
      "description": "Miami-based mortgage loan officer helping homebuyers across Florida with FHA, conventional, self-employed, investor, ITIN and foreign national loans. Bilingual in English and Spanish.",
      "url": "https://workwithnelly.com",
      "logo": "https://www.workwithnelly.com/assets/nelly_mark.png",
      "image": "https://www.workwithnelly.com/assets/nelly_headshot_new.jpg",
      "telephone": "+1-786-286-5906",
      "email": "workwithnelly1@gmail.com",
      "areaServed": [
        {
          "@type": "City",
          "name": "Miami",
        },
        {
          "@type": "State",
          "name": "Florida",
        },
      ],
      "knowsLanguage": [
        "English",
        "Spanish",
      ],
      "knowsAbout": [
        "FHA loans",
        "Conventional loans",
        "Self-employed mortgage programs",
        "DSCR investment loans",
        "ITIN loans",
        "Foreign national mortgage loans",
        "Mortgage refinance",
      ],
      "identifier": {
        "@type": "PropertyValue",
        "propertyID": "NMLS",
        "value": "1808120",
      },
      "parentOrganization": {
        "@type": "Organization",
        "name": "ACE Florida Mortgage",
        "identifier": {
          "@type": "PropertyValue",
          "propertyID": "NMLS",
          "value": "2384013",
        },
      },
      "founder": {
        "@id": "https://workwithnelly.com/#nelly",
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "telephone": "+1-786-286-5906",
        "email": "workwithnelly1@gmail.com",
        "availableLanguage": [
          "English",
          "Spanish",
        ],
      },
      "sameAs": [
        "https://www.instagram.com/workwithnelly/",
        "https://www.facebook.com/workwithnelly/",
        "https://www.linkedin.com/in/nelly-santiesteban-17613832/",
        "https://www.zillow.com/lender-profile/workwithnelly/",
      ],
    },
    {
      "@type": "Person",
      "@id": "https://workwithnelly.com/#nelly",
      "name": "Nelly Santiesteban",
      "jobTitle": "Mortgage Loan Officer",
      "description": "Mortgage loan officer in Miami, FL, helping clients with home financing since 2005.",
      "image": "https://www.workwithnelly.com/assets/nelly_headshot_new.jpg",
      "url": "https://workwithnelly.com/mortgage-loan-officer-miami",
      "telephone": "+1-786-286-5906",
      "email": "workwithnelly1@gmail.com",
      "knowsLanguage": [
        "English",
        "Spanish",
      ],
      "identifier": {
        "@type": "PropertyValue",
        "propertyID": "NMLS",
        "value": "1808120",
      },
      "worksFor": {
        "@id": "https://workwithnelly.com/#business",
      },
      "sameAs": [
        "https://www.linkedin.com/in/nelly-santiesteban-17613832/",
        "https://www.zillow.com/lender-profile/workwithnelly/",
        "https://www.instagram.com/workwithnelly/",
        "https://www.facebook.com/workwithnelly/",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://workwithnelly.com/#website",
      "url": "https://workwithnelly.com",
      "name": "Work With Nelly",
      "inLanguage": "en-US",
      "publisher": {
        "@id": "https://workwithnelly.com/#business",
      },
    },
    {
      "@type": "ContactPage",
      "@id": "https://workwithnelly.com/contact#webpage",
      "url": "https://workwithnelly.com/contact",
      "name": "Contact Nelly Santiesteban | Mortgage Loan Officer Miami",
      "description": "Call (786) 286-5906 or send a message to talk about your mortgage options. English and Spanish.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://workwithnelly.com/#website",
      },
      "about": {
        "@id": "https://workwithnelly.com/#business",
      },
      "breadcrumb": {
        "@id": "https://workwithnelly.com/contact#breadcrumb",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://workwithnelly.com/contact#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://workwithnelly.com",
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Contact",
          "item": "https://workwithnelly.com/contact",
        },
      ],
    },
  ],
};

// 6. Blog Index Page JSON-LD (Graph: FinancialService, Person, WebSite, CollectionPage, BreadcrumbList, Blog)
export const blogJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FinancialService",
      "@id": "https://workwithnelly.com/#business",
      "name": "Nelly Santiesteban - Mortgage Loan Officer",
      "alternateName": "Work With Nelly",
      "description": "Miami-based mortgage loan officer helping homebuyers across Florida with FHA, conventional, self-employed, investor, ITIN and foreign national loans. Bilingual in English and Spanish.",
      "url": "https://workwithnelly.com",
      "logo": "https://www.workwithnelly.com/assets/nelly_mark.png",
      "image": "https://www.workwithnelly.com/assets/nelly_headshot_new.jpg",
      "telephone": "+1-786-286-5906",
      "email": "workwithnelly1@gmail.com",
      "areaServed": [
        {
          "@type": "City",
          "name": "Miami",
        },
        {
          "@type": "State",
          "name": "Florida",
        },
      ],
      "knowsLanguage": [
        "English",
        "Spanish",
      ],
      "knowsAbout": [
        "FHA loans",
        "Conventional loans",
        "Self-employed mortgage programs",
        "DSCR investment loans",
        "ITIN loans",
        "Foreign national mortgage loans",
        "Mortgage refinance",
      ],
      "identifier": {
        "@type": "PropertyValue",
        "propertyID": "NMLS",
        "value": "1808120",
      },
      "parentOrganization": {
        "@type": "Organization",
        "name": "ACE Florida Mortgage",
        "identifier": {
          "@type": "PropertyValue",
          "propertyID": "NMLS",
          "value": "2384013",
        },
      },
      "founder": {
        "@id": "https://workwithnelly.com/#nelly",
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "telephone": "+1-786-286-5906",
        "email": "workwithnelly1@gmail.com",
        "availableLanguage": [
          "English",
          "Spanish",
        ],
      },
      "sameAs": [
        "https://www.instagram.com/workwithnelly/",
        "https://www.facebook.com/workwithnelly/",
        "https://www.linkedin.com/in/nelly-santiesteban-17613832/",
        "https://www.zillow.com/lender-profile/workwithnelly/",
      ],
    },
    {
      "@type": "Person",
      "@id": "https://workwithnelly.com/#nelly",
      "name": "Nelly Santiesteban",
      "jobTitle": "Mortgage Loan Officer",
      "description": "Mortgage loan officer in Miami, FL, helping clients with home financing since 2005.",
      "image": "https://www.workwithnelly.com/assets/nelly_headshot_new.jpg",
      "url": "https://workwithnelly.com/mortgage-loan-officer-miami",
      "telephone": "+1-786-286-5906",
      "email": "workwithnelly1@gmail.com",
      "knowsLanguage": [
        "English",
        "Spanish",
      ],
      "identifier": {
        "@type": "PropertyValue",
        "propertyID": "NMLS",
        "value": "1808120",
      },
      "worksFor": {
        "@id": "https://workwithnelly.com/#business",
      },
      "sameAs": [
        "https://www.linkedin.com/in/nelly-santiesteban-17613832/",
        "https://www.zillow.com/lender-profile/workwithnelly/",
        "https://www.instagram.com/workwithnelly/",
        "https://www.facebook.com/workwithnelly/",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://workwithnelly.com/#website",
      "url": "https://workwithnelly.com",
      "name": "Work With Nelly",
      "inLanguage": "en-US",
      "publisher": {
        "@id": "https://workwithnelly.com/#business",
      },
    },
    {
      "@type": "CollectionPage",
      "@id": "https://workwithnelly.com/blog#webpage",
      "url": "https://workwithnelly.com/blog",
      "name": "Mortgage Blog | Nelly Santiesteban",
      "description": "Mortgage tips and guides for Miami and Florida homebuyers.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://workwithnelly.com/#website",
      },
      "about": {
        "@id": "https://workwithnelly.com/#business",
      },
      "breadcrumb": {
        "@id": "https://workwithnelly.com/blog#breadcrumb",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://workwithnelly.com/blog#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://workwithnelly.com",
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Blog",
          "item": "https://workwithnelly.com/blog",
        },
      ],
    },
    {
      "@type": "Blog",
      "@id": "https://workwithnelly.com/blog#blog",
      "url": "https://workwithnelly.com/blog",
      "name": "Work With Nelly Blog",
      "publisher": {
        "@id": "https://workwithnelly.com/#business",
      },
      "author": {
        "@id": "https://workwithnelly.com/#nelly",
      },
    },
  ],
};
