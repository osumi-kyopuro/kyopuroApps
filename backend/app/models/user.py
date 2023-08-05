from sqlalchemy import Column, String,Integer
from ..databases.database import Base

class UserInfo(Base):
    __tablename__ = 'user_info'

    user_id=Column(Integer,primary_key=True)
    user_name=Column(String)
    user_password=Column(String)

