from fastapi import APIRouter
from fastapi.responses import StreamingResponse
from app.dependencies import OpenAIDep
from app.ai.model import ResumeRequest, ResumeResponse


ai_router = APIRouter()


@ai_router.post("/resume-ai", response_model=ResumeResponse, status_code=200)
async def resume(resume_request: ResumeRequest, openai_client: OpenAIDep):
    """
    Returns a resume of the conversation using streaming
    """
    completion = openai_client.chat.completions.create(
        model="deepseek-ai/deepseek-r1",
        messages=[
            {
                "role": "system",
                "content": "You are an expert assistant in summarizing conversations. Your task is to analyze the context given to you and extract only the key points, without adding interpretations or additional information that is not present in it. Your summary should be brief, concise and organized (you can use lists or short paragraphs if you consider it necessary) to make it easy to read. Use only the information from the given context and do not make assumptions.",
            },
            {"role": "assistant", "content": resume_request.message},
        ],
        temperature=0.7,
        top_p=0.7,
        stream=True,
        max_tokens=300,
    )

    def generate():
        for chunk in completion:
            if chunk.choices and chunk.choices[0].delta.content is not None:
                yield chunk.choices[0].delta.content

    return StreamingResponse(generate(), media_type="text/plain")
