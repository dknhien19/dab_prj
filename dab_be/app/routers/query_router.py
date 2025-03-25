from fastapi import APIRouter
from app.models.query_model import QueryRequest
from app.services.nlp_processor import process_query
from app.database.db_connector import execute_query

router = APIRouter()

@router.post("/query")
async def get_query_results(request: QueryRequest):
    sql_query = process_query(request.query)
    results = execute_query(sql_query)
    return {"query": sql_query, "results": results}