from pydantic_settings import BaseSettings, SettingsConfigDict

class Setting(BaseSettings):
    DATABASE_URI: str
    ENVIRONMENT: str = "development"
    VERSION_APP: str
    TITLE_APP: str
    DESCRIPTION_APP: str

    model_config = SettingsConfigDict(
        env_file=".env",
        extra="ignore"
    )

Config= Setting()
