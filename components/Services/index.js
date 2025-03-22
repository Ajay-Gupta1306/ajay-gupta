import React, { useState } from "react";
import Image from "next/image";
import * as Accordion from "@radix-ui/react-accordion";
import styles from "@/styles/services.module.css";

const services = [
  {
    title: "Design & Animation",
    content:
      "We’ll help you create a clear, consistent brand identity that connects with your audience. Whether you’re building a new brand or refreshing an old one.",
    image: "/design&animation.avif",
    tags: [
      "Branding",
      "Rebranding",
      "Logo",
      "DesignBrand Guidelines",
      "Wireframing",
      "User Research & Testing",
      "Rapid prototyping",
      "UX/UI Design",
      "Custom Animations",
    ],
  },
  {
    title: "Web Development",
    content:
      "We build websites and web apps that are not only unique and eye-catching but also scalable and reliable, helping your business stand out.",
    image: "/webdevelop.avif",
    tags: [
      "Web Design & Development",
      "Custom Website Development",
      "E-commerce Website Solutions",
      "Responsive Web Design",
      "SEO-Friendly Web Development",
      "Full-Stack Web Development",
      "CMS Website Development",
      "Scalable Web Applications",
      "UI/UX Design Services",
      "API Development & Integration",
      "Shopify Development",
      "WordPress Development",
      "Performance Optimization",
      "Mobile-First Web Design",
      "Website Maintenance & Support",
    ],
  },
  {
    title: "Serch Engine Optimizer",
    content:
      "We design and develop high-performing websites and web applications that are visually striking, scalable, and built for long-term success. Our solutions enhance your brand’s online presence, improve user experience, and drive business growth.",
    image: "/webdevelop.avif",
    tags: [
      "Search Engine Optimization (SEO)",
      "On-Page SEO",
      "Off-Page SEO",
      "Technical SEO",
      "SEO Keyword Research",
      "SEO Content Optimization",
      "Link Building Strategies",
      "Local SEO Services",
      "Mobile SEO Optimization",
      "SEO-Friendly Web Development",
      "Website Speed Optimization",
      "Schema Markup Implementation",
      "Google Search Ranking",
      "E-commerce SEO",
      "SEO Audit & Analysis",
    ],
  },
  {
    title: "Maintenance & Support",
    content:
      "We provide ongoing support to keep everything running smoothly and efficiently. Let us handle the tech so you can focus on growing your business.",
    image: "/maintenance.avif",
    tags: ["Performance Optimization"],
  },
];

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={styles.servicesContainer}>
      <div className={styles.servicesWrapper}>
        {/* Accordion Section */}
        <div className={styles.servicesAccordion}>
          <Accordion.Root type="single" collapsible defaultValue={`item-0`}>
            {services.map((service, index) => (
              <Accordion.Item
                key={index}
                value={`item-${index}`}
                className={styles.accordionItem}
              >
                <Accordion.Header>
                  <Accordion.Trigger
                    className={styles.servicesAccordionTitle}
                    onClick={() => setActiveIndex(index)}
                  >
                    <span className={styles.serviceNumber}>{index + 1}</span>{" "}
                    <span className={styles.accordionTitle}>
                      {service.title}
                    </span>
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className={styles.servicesAccordionContent}>
                  <div className={styles.tagsWrapper}>
                    {service.tags.map((tag, i) => (
                      <span key={i} className={styles.tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p>{service.content}</p>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>

        {/* Image Section */}
        <div className={styles.servicesImageContainer}>
          <Image
            src={services[activeIndex].image}
            alt={services[activeIndex].title}
            width={500}
            height={300}
            className={styles.servicesImage}
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
