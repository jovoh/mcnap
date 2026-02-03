export interface NavigationItem {
  id: string;
  label: string;
  href: string;
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  image: string;
  credentials?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  position: string;
  content: string;
  image: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  image?: string;
  registrationFee?: string;
  qrCode?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}