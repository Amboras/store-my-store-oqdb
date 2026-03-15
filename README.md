# Ecommerce Starter Template

Dead simple ecommerce store template using Medusa v2 and Next.js.

## Quick Start

```bash
# 1. Clone this repo
git clone <your-repo-url> my-store
cd my-store

# 2. Install dependencies
make install

# 3. Start development
make dev
```

**That's it!** Your store is running at:
- Backend: http://localhost:9000
- Storefront: http://localhost:3000

## Customize Your Store

```bash
# 1. Plan your customizations
/create-plan

# 2. AI implements the plan
/implement-plan

# 3. See your customized store
make dev
```

The storefront gets customized in place - no generated folders, no complexity.

## Tech Stack

- **Backend**: Medusa v2 (headless commerce)
- **Frontend**: Next.js 15 + React 19
- **Database**: PostgreSQL
- **Payments**: Stripe
- **Styling**: Tailwind CSS

## Project Structure

```
my-store/
├── backend/       # Medusa commerce engine
├── storefront/    # Next.js storefront (customize this!)
├── PLAN.md        # Your store plan (created by /create-plan)
└── Makefile       # Simple commands
```

## Commands

```bash
make install       # Install dependencies
make dev           # Start both backend + storefront
make dev-backend   # Backend only
make dev-storefront # Storefront only
make stop          # Stop all services
```

## Documentation

See [CLAUDE.md](./CLAUDE.md) for full documentation.
