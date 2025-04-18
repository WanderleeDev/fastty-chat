# FasttyChat

**Requirements:**

- Python 3.9+
- pip
- (Optional) [Poetry](https://python-poetry.org/) or [pipenv](https://pipenv.pypa.io/en/latest/)
- Supported database (PostgreSQL, SQLite, etc.)

---

## 🚀 Quickstart

```bash
# 1. Clone the repository

git clone [https://github.com/your-username/FasttyChat.git](https://github.com/your-username/FasttyChat.git)
cd FasttyChat

# 2. Create and activate a virtual environment

python -m venv venv
source venv/bin/activate # On Windows: venv\Scripts\activate

# 3. Install dependencies

pip install -r requirement.txt

# 4. Configure environment variables

cp .env.example .env

# (Edit .env and fill in your values)

# 5. (Optional) Run database migrations

alembic upgrade head

# 6. Start the FastAPI server

uvicorn app.main:app --reload
```
