from typing import Annotated
from openai import OpenAI
from fastapi import Depends
from app.core import Config


def validate_openai_config():
    """Validate OpenAI configuration before client creation."""
    if not Config.NVIDIA_BASE_URL or not Config.DEEPSEEK_API_KEY:
        raise ValueError(
            "Environment variables not defined: NVIDIA_BASE_URL or DEEPSEEK_API_KEY"
        )


def get_openai_client() -> OpenAI:
    """Create an OpenAI client.

    Returns:
        OpenAI: Configured OpenAI client
    """
    validate_openai_config()
    client = OpenAI(
        base_url=Config.NVIDIA_BASE_URL,
        api_key=Config.DEEPSEEK_API_KEY,
    )

    return client


OpenAIDep = Annotated[OpenAI, Depends(get_openai_client)]

client = get_openai_client()
