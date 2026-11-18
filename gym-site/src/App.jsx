import { useEffect, useRef, useState } from 'react'
import './App.css'

const MEMBERSHIPS = [
  {
    id: 'atelier',
    name: 'Atelier',
    price: '280',
    cadence: 'month',
    summary: 'Open floor access and recovery suites for focused independent training.',
    perks: ['Floor & strength hall', 'Recovery lounge', 'Guest pass · 1 / month'],
  },
  {
    id: 'private',
    name: 'Private',
    price: '520',
    cadence: 'month',
    summary: 'Priority booking with a dedicated coach and curated programming.',
    perks: ['Everything in Atelier', '4 private sessions', 'Program design'],
    featured: true,
  },
  {
    id: 'residence',
    name: 'Residence',
    price: '980',
    cadence: 'month',
    summary: 'Unlimited coaching, concierge scheduling, and after-hours access.',
    perks: ['Unlimited private coaching', 'After-hours key', 'Nutrition consult'],
  },
]

const AMENITIES = [
  {
    title: 'Strength atelier',
    copy: 'Calibrated plates, specialty bars, and quiet platforms designed for deep work.',
  },
  {
    title: 'Recovery wing',
    copy: 'Contrast baths, soft lighting, and stillness after intensity.',
  },
  {
    title: 'Private studios',
    copy: 'Sound-dampened rooms for one-to-one coaching and movement assessment.',
  },
  {
    title: 'Members’ lounge',
    copy: 'Espresso, mineral water, and a calm threshold between training and the city.',
  },
]

function useReveal() {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add('is-visible')
          observer.disconnect()
        }
      },
      { threshold: 0.18, rootMargin: '0px 0px -8% 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return ref
}

function Reveal({ as: Tag = 'div', className = '', children, ...props }) {
  const ref = useReveal()
  return (
    <Tag ref={ref} className={`reveal ${className}`.trim()} {...props}>
      {children}
    </Tag>
  )
}

export default function App() {
  const [navSolid, setNavSolid] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState('private')
  const [formState, setFormState] = useState({ name: '', email: '', interest: 'private', message: '' })
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const onScroll = () => setNavSolid(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="site">
      <header className={`nav ${navSolid ? 'nav--solid' : ''}`}>
        <a className="nav__brand" href="#top" aria-label="Aether Athletics home">
          Aether Athletics
        </a>
        <nav className="nav__links" aria-label="Primary">
          <a href="#memberships">Memberships</a>
          <a href="#amenities">Amenities</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="nav__cta" href="#contact">
          Inquire
        </a>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-brand">
          <div className="hero__media" aria-hidden="true">
            <img
              className="hero__image"
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2400&q=80"
              alt=""
            />
            <div className="hero__veil" />
            <div className="hero__atmosphere" />
          </div>

          <div className="hero__content">
            <p className="hero__brand" id="hero-brand">
              Aether Athletics
            </p>
            <h1 className="hero__headline">Train in quiet luxury.</h1>
            <p className="hero__lede">
              A private sanctuary for strength, recovery, and disciplined craft — reserved for
              those who prefer fewer people and finer standards.
            </p>
            <div className="hero__actions">
              <a className="btn btn--primary" href="#memberships">
                View memberships
              </a>
              <a className="btn btn--ghost" href="#contact">
                Request a tour
              </a>
            </div>
          </div>
        </section>

        <section id="memberships" className="section memberships" aria-labelledby="memberships-title">
          <Reveal className="section__intro">
            <p className="eyebrow">Memberships</p>
            <h2 id="memberships-title">Choose the cadence that fits your craft.</h2>
            <p className="section__lede">
              Transparent tiers. No contracts dressed as exclusivity — only access scaled to how you
              train.
            </p>
          </Reveal>

          <div className="plan-grid" role="list">
            {MEMBERSHIPS.map((plan, index) => (
              <Reveal
                as="article"
                key={plan.id}
                className={`plan ${plan.featured ? 'plan--featured' : ''} ${selectedPlan === plan.id ? 'plan--selected' : ''}`}
                style={{ '--delay': `${index * 90}ms` }}
                role="listitem"
              >
                <button
                  type="button"
                  className="plan__select"
                  aria-pressed={selectedPlan === plan.id}
                  onClick={() => {
                    setSelectedPlan(plan.id)
                    setFormState((s) => ({ ...s, interest: plan.id }))
                  }}
                >
                  <div className="plan__top">
                    <h3>{plan.name}</h3>
                    {plan.featured ? <span className="plan__badge">Most chosen</span> : null}
                  </div>
                  <p className="plan__price">
                    <span className="plan__currency">$</span>
                    {plan.price}
                    <span className="plan__cadence">/{plan.cadence}</span>
                  </p>
                  <p className="plan__summary">{plan.summary}</p>
                  <ul className="plan__perks">
                    {plan.perks.map((perk) => (
                      <li key={perk}>{perk}</li>
                    ))}
                  </ul>
                </button>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="amenities" className="section amenities" aria-labelledby="amenities-title">
          <div className="amenities__layout">
            <Reveal className="amenities__copy">
              <p className="eyebrow">Amenities</p>
              <h2 id="amenities-title">Spaces composed for focus, not spectacle.</h2>
              <p className="section__lede">
                Every room is tuned for atmosphere: warm metal, soft acoustics, and equipment kept
                in museum condition.
              </p>
            </Reveal>

            <ul className="amenity-list">
              {AMENITIES.map((item, index) => (
                <Reveal
                  as="li"
                  key={item.title}
                  className="amenity"
                  style={{ '--delay': `${index * 80}ms` }}
                >
                  <span className="amenity__index">{String(index + 1).padStart(2, '0')}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.copy}</p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        <section id="contact" className="section contact" aria-labelledby="contact-title">
          <Reveal className="contact__panel">
            <div className="contact__copy">
              <p className="eyebrow">Contact</p>
              <h2 id="contact-title">Begin with a conversation.</h2>
              <p className="section__lede">
                Share how you train. We reply within one business day with membership guidance and
                available tour times.
              </p>
              <address className="contact__details">
                <p>418 Mercer Street, New York</p>
                <p>
                  <a href="mailto:membership@aetherathletics.com">membership@aetherathletics.com</a>
                </p>
                <p>
                  <a href="tel:+12125550148">+1 (212) 555-0148</a>
                </p>
              </address>
            </div>

            {submitted ? (
              <div className="contact__thanks" role="status">
                <h3>Thank you.</h3>
                <p>Your inquiry is noted. A membership advisor will be in touch shortly.</p>
              </div>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit}>
                <label>
                  <span>Name</span>
                  <input
                    name="name"
                    autoComplete="name"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState((s) => ({ ...s, name: e.target.value }))}
                  />
                </label>
                <label>
                  <span>Email</span>
                  <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState((s) => ({ ...s, email: e.target.value }))}
                  />
                </label>
                <label>
                  <span>Interest</span>
                  <select
                    name="interest"
                    value={formState.interest}
                    onChange={(e) => setFormState((s) => ({ ...s, interest: e.target.value }))}
                  >
                    {MEMBERSHIPS.map((plan) => (
                      <option key={plan.id} value={plan.id}>
                        {plan.name}
                      </option>
                    ))}
                    <option value="tour">Private tour</option>
                  </select>
                </label>
                <label className="contact__message">
                  <span>Message</span>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Tell us about your training goals."
                    value={formState.message}
                    onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
                  />
                </label>
                <button className="btn btn--primary" type="submit">
                  Send inquiry
                </button>
              </form>
            )}
          </Reveal>
        </section>
      </main>

      <footer className="footer">
        <p className="footer__brand">Aether Athletics</p>
        <p className="footer__note">Private membership · By inquiry</p>
      </footer>
    </div>
  )
}
