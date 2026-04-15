'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import {
  ArrowRight,
  Truck,
  Shield,
  RotateCcw,
  Palette,
  Layers,
  Sparkles,
  Award,
  CheckCircle2,
} from 'lucide-react'
import CollectionSection from '@/components/marketing/collection-section'
import { useCollections } from '@/hooks/use-collections'
import { trackMetaEvent } from '@/lib/meta-pixel'

const HERO_IMAGE = 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1600&q=80'
const LIFESTYLE_IMAGE = 'https://images.unsplash.com/photo-1574182245530-967d9b3831af?w=1600&q=80'

const CATEGORIES = [
  {
    title: 'Acrylic Paints',
    desc: 'Vibrant, fast-drying colors for every style',
    image: 'https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=800&q=80',
    href: '/products',
  },
  {
    title: 'Oil Paints',
    desc: 'Rich, luminous pigments for masterpiece depth',
    image: 'https://images.unsplash.com/photo-1508615039623-a25605d2b022?w=800&q=80',
    href: '/products',
  },
  {
    title: 'Brushes & Tools',
    desc: 'Professional-grade tools for flawless strokes',
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800&q=80',
    href: '/products',
  },
]

const TRUST_BADGES = [
  { icon: Truck,    label: 'Free Shipping',       sub: 'On orders over $75' },
  { icon: RotateCcw, label: '30-Day Returns',     sub: 'Hassle-free guarantee' },
  { icon: Shield,   label: 'Secure Checkout',      sub: '256-bit SSL encryption' },
  { icon: Award,    label: 'Artist-Tested Quality', sub: 'Trusted by professionals' },
]

const FEATURES = [
  {
    icon: Palette,
    title: 'Museum-Grade Pigments',
    desc: 'Our paints use the same pigments found in the world\'s finest galleries — rich, lightfast, and true to color.',
  },
  {
    icon: Layers,
    title: 'Curated for Every Level',
    desc: 'From first strokes to gallery submissions — we stock supplies that grow with your skill.',
  },
  {
    icon: Sparkles,
    title: 'Expert-Backed Selection',
    desc: 'Every product is tested and endorsed by working professional artists and instructors.',
  },
]

export default function HomePage() {
  const { data: collections, isLoading } = useCollections()
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newsletterEmail.trim()) return
    trackMetaEvent('Lead', {
      content_name: 'newsletter_signup',
      status: 'submitted',
    })
    setSubscribed(true)
  }

  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#F5F1EB]">
        <div className="container-custom grid lg:grid-cols-2 gap-0 items-stretch min-h-[580px] lg:min-h-[680px]">
          {/* Text */}
          <div className="flex flex-col justify-center py-16 lg:py-24 pr-0 lg:pr-12 animate-fade-in-up">
            <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-[#C0762A] font-semibold mb-5">
              <span className="w-6 h-px bg-[#C0762A]" />
              Premium Art Supplies
            </p>
            <h1 className="text-h1 lg:text-display font-heading font-bold text-[#2C3E50] leading-[1.08] text-balance mb-6">
              Where Every<br className="hidden lg:block" /> Stroke Begins
            </h1>
            <p className="text-lg text-muted-foreground max-w-md leading-relaxed mb-8">
              Professional paint materials crafted for artists who refuse to compromise. Museum-grade pigments. Studio-tested quality.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 bg-[#2C3E50] text-white px-8 py-4 text-sm font-semibold uppercase tracking-wide hover:bg-[#1a252f] transition-colors"
                prefetch={true}
              >
                Shop Now
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 border border-[#2C3E50] text-[#2C3E50] px-8 py-4 text-sm font-semibold uppercase tracking-wide hover:bg-[#2C3E50] hover:text-white transition-colors"
                prefetch={true}
              >
                Our Story
              </Link>
            </div>
            {/* mini social proof */}
            <div className="flex items-center gap-3 mt-10 pt-8 border-t border-border">
              <div className="flex -space-x-2">
                {['#C0762A', '#2C3E50', '#8B4513'].map((c, i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center" style={{ background: c }}>
                    <Palette className="h-3.5 w-3.5 text-white" />
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">4,800+ artists</span> trust Artelier
              </p>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative min-h-[340px] lg:min-h-0 -mx-4 sm:-mx-6 lg:mx-0 lg:animate-fade-in">
            <Image
              src={HERO_IMAGE}
              alt="Artist painting with vibrant colors"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
            {/* Floating badge */}
            <div className="absolute bottom-6 left-6 bg-white/92 backdrop-blur-sm px-5 py-3 shadow-lg border border-border">
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-0.5">This week</p>
              <p className="text-sm font-bold text-[#2C3E50]">New Spring Palettes In</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TRUST BAR ────────────────────────────────────────────── */}
      <section className="border-y bg-white">
        <div className="container-custom py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {TRUST_BADGES.map(({ icon: Icon, label, sub }) => (
              <div key={label} className="flex items-center gap-3 justify-center text-center md:text-left md:justify-start">
                <div className="w-9 h-9 rounded-full bg-[#F5F1EB] flex items-center justify-center flex-shrink-0">
                  <Icon className="h-4 w-4 text-[#2C3E50]" strokeWidth={1.6} />
                </div>
                <div>
                  <p className="text-xs font-bold text-foreground leading-snug">{label}</p>
                  <p className="text-xs text-muted-foreground leading-snug">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CATEGORY GRID ────────────────────────────────────────── */}
      <section className="py-section bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.22em] text-[#C0762A] font-semibold mb-3">Explore</p>
            <h2 className="text-h2 font-heading font-bold text-[#2C3E50]">Shop by Category</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.title}
                href={cat.href}
                className="group relative overflow-hidden aspect-[3/4] block bg-muted"
              >
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C3E50]/80 via-[#2C3E50]/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="font-heading font-bold text-xl mb-1">{cat.title}</h3>
                  <p className="text-sm text-white/75 mb-4">{cat.desc}</p>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide border-b border-white/50 pb-0.5 group-hover:border-white transition-colors">
                    Browse <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── COLLECTIONS ─────────────────────────────────────────── */}
      {isLoading ? null : collections && collections.length > 0 ? (
        <>
          {collections.map((collection: { id: string; handle: string; title: string; metadata?: Record<string, unknown> }, index: number) => (
            <CollectionSection
              key={collection.id}
              collection={collection}
              alternate={index % 2 === 1}
            />
          ))}
        </>
      ) : null}

      {/* ─── BRAND STORY ─────────────────────────────────────────── */}
      <section className="py-section bg-[#F5F1EB]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative aspect-[4/5] bg-muted overflow-hidden">
              <Image
                src={LIFESTYLE_IMAGE}
                alt="Artist at work in studio"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              {/* accent block */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#C0762A]/20" />
            </div>
            <div className="space-y-6 lg:max-w-md">
              <p className="text-xs uppercase tracking-[0.22em] text-[#C0762A] font-semibold">Our Philosophy</p>
              <h2 className="text-h2 font-heading font-bold text-[#2C3E50]">
                Crafted for the<br />Serious Artist
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Artelier was born from a frustration shared by professional painters worldwide — great art deserves great materials. We source directly from trusted mills and pigment houses to give you consistency you can rely on, session after session.
              </p>
              <ul className="space-y-3">
                {[
                  'Lightfast pigments rated 100+ years',
                  'Consistent batch-to-batch color accuracy',
                  'Used in art schools and studios worldwide',
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-foreground">
                    <CheckCircle2 className="h-4 w-4 text-[#C0762A] flex-shrink-0 mt-0.5" />
                    {point}
                  </li>
                ))}
              </ul>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-[#2C3E50] border-b border-[#2C3E50] pb-0.5 hover:opacity-70 transition-opacity"
                prefetch={true}
              >
                Our Story
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FEATURES ────────────────────────────────────────────── */}
      <section className="py-section bg-[#2C3E50]">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.22em] text-[#C0762A] font-semibold mb-3">Why Artelier</p>
            <h2 className="text-h2 font-heading font-bold text-white">The Artelier Difference</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FEATURES.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="text-center px-4">
                <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-5">
                  <Icon className="h-6 w-6 text-[#C0762A]" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading font-bold text-white text-lg mb-3">{title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── NEWSLETTER ─────────────────────────────────────────── */}
      <section className="py-section bg-background">
        <div className="container-custom max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.22em] text-[#C0762A] font-semibold mb-3">Newsletter</p>
          <h2 className="text-h2 font-heading font-bold text-[#2C3E50] mb-3">Get Inspired</h2>
          <p className="text-muted-foreground mb-8">
            Join 4,800+ artists. First access to new collections, studio techniques, and exclusive offers.
          </p>
          {subscribed ? (
            <div className="inline-flex items-center gap-2 bg-[#2C3E50]/8 border border-[#2C3E50]/20 px-8 py-4 text-sm font-semibold text-[#2C3E50]">
              <CheckCircle2 className="h-5 w-5 text-[#C0762A]" />
              You&apos;re on the list. Welcome to Artelier.
            </div>
          ) : (
            <form className="flex gap-2 max-w-md mx-auto" onSubmit={handleNewsletterSubmit}>
              <input
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 border border-border bg-white px-4 py-3.5 text-sm placeholder:text-muted-foreground focus:border-[#2C3E50] focus:outline-none transition-colors"
              />
              <button
                type="submit"
                className="bg-[#2C3E50] text-white px-6 py-3.5 text-sm font-semibold uppercase tracking-wide hover:bg-[#1a252f] transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  )
}
