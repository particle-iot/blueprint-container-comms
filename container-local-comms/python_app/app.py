import os
import time
import redis

# Connect to Redis
redis_host = os.getenv("REDIS_HOST", "localhost")
redis_port = int(os.getenv("REDIS_PORT", 6379))
r = redis.Redis(host=redis_host, port=redis_port, decode_responses=True)

while True:
    message = f"Hello from Python! {time.time()}"
    r.rpush("queue:messages", message)  # Push to queue
    print(f"Sent: {message}")
    time.sleep(2)  # Wait before sending another message