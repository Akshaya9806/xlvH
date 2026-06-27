from pydantic import BaseModel


class UserRequest(BaseModel):
    user_query: str