// Google Analytics utility functions for event tracking

// Declare gtag function for TypeScript
declare global {
  interface Window {
    gtag: (
      command: string,
      targetId: string | Date,
      config?: Record<string, any>
    ) => void;
    dataLayer: any[];
  }
}

// Generic event tracker
export const trackEvent = (eventName: string, params?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params);
  }
};

// Page view tracking
export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'page_view', {
      page_path: url,
    });
  }
};

// Conversion tracking with value
export const trackConversion = (type: string, value?: number) => {
  trackEvent('conversion', {
    conversion_type: type,
    value: value || 0,
    currency: 'USD',
  });
};

// Form submission tracking
export const trackFormSubmission = (formData: {
  service: string;
  budget: string;
  timeline: string;
}) => {
  const leadValue = assignLeadValue(formData.budget);
  
  trackEvent('form_submit', {
    form_name: 'contact_form',
    service: formData.service,
    budget: formData.budget,
    timeline: formData.timeline,
    value: leadValue,
    currency: 'USD',
  });
  
  // Also track as conversion
  trackConversion('form_submission', leadValue);
};

// CTA click tracking
export const trackCTAClick = (ctaName: string, location: string) => {
  trackEvent('cta_click', {
    cta_name: ctaName,
    cta_location: location,
    page_path: typeof window !== 'undefined' ? window.location.pathname : '',
  });
};

// Project view tracking
export const trackProjectView = (projectName: string, projectCategory: string) => {
  trackEvent('project_view', {
    project_name: projectName,
    project_category: projectCategory,
    page_path: typeof window !== 'undefined' ? window.location.pathname : '',
  });
};

// Service interest tracking
export const trackServiceInterest = (serviceName: string) => {
  trackEvent('service_interest', {
    service_name: serviceName,
    page_path: typeof window !== 'undefined' ? window.location.pathname : '',
  });
};

// Navigation click tracking
export const trackNavigation = (linkText: string, linkUrl: string, location: 'header' | 'footer') => {
  trackEvent('navigation_click', {
    link_text: linkText,
    link_url: linkUrl,
    location: location,
  });
};

// Form start tracking (when user clicks into first field)
export const trackFormStart = (formName: string = 'contact_form') => {
  trackEvent('form_start', {
    form_name: formName,
    page_path: typeof window !== 'undefined' ? window.location.pathname : '',
  });
};

// Form error tracking
export const trackFormError = (errorType: string, fieldName?: string) => {
  trackEvent('form_error', {
    error_type: errorType,
    field_name: fieldName,
    form_name: 'contact_form',
  });
};

// Scroll depth tracking
export const trackScrollDepth = (percent: number) => {
  trackEvent('scroll_depth', {
    percent: percent,
    page_path: typeof window !== 'undefined' ? window.location.pathname : '',
  });
};

// File download tracking
export const trackDownload = (fileName: string, linkText?: string) => {
  trackEvent('file_download', {
    file_name: fileName,
    link_text: linkText || fileName,
    page_path: typeof window !== 'undefined' ? window.location.pathname : '',
  });
};

// External link tracking
export const trackExternalLink = (linkUrl: string, linkText: string) => {
  trackEvent('click', {
    link_text: linkText,
    link_url: linkUrl,
    outbound: true,
  });
};

// Social link tracking
export const trackSocialClick = (platform: string, url: string) => {
  trackEvent('social_click', {
    platform: platform,
    link_url: url,
  });
};

// Gallery interaction tracking
export const trackGalleryInteraction = (projectName: string, imageIndex: number) => {
  trackEvent('gallery_interaction', {
    project_name: projectName,
    image_index: imageIndex,
  });
};

// Section view tracking
export function trackSectionView(sectionName: string) {
  if (typeof window === 'undefined' || !window.gtag) return
  
  window.gtag('event', 'section_view', {
    event_category: 'engagement',
    event_label: sectionName,
    value: 1,
    page_path: window.location.pathname
  })
}

// Metric view tracking
export function trackMetricView(metricName: string) {
  if (typeof window === 'undefined' || !window.gtag) return
  
  window.gtag('event', 'metric_view', {
    event_category: 'engagement',
    event_label: metricName,
    value: 1,
    page_path: window.location.pathname
  })
}

// Assign lead value based on budget selection
function assignLeadValue(budget: string): number {
  const budgetMap: Record<string, number> = {
    '$300 - $500': 400,
    '$500 - $1,000': 750,
    '$1,000 - $2,000': 1500,
    '$2,000 - $5,000': 3500,
    '$5,000+': 7500,
  };
  
  return budgetMap[budget] || 500; // Default to $500 if not found
}

