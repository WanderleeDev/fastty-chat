from sqlmodel import Field, SQLModel


class ResumeRequest(SQLModel):
    message: str = Field(description="Resume text for the conversation")

    model_config = {
        "json_schema_extra": {
            "example": {
                "message": "What is the best way to sort a list of dictionaries in Python?"
            }
        }
    }


class ResumeResponse(SQLModel):
    message: str = Field(description="Resume text for the conversation")

    model_config = {
        "json_schema_extra": {
            "example": {
                "message": "The best way to sort a list of dictionaries in Python is to use the sorted() function with a lambda as the key argument. For example: sorted(my_list, key=lambda k: k['name'])"
            }
        }
    }
