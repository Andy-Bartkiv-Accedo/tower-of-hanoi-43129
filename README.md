# tower-of-hanoi-43129
API for testing solutions for Tower of Hanoi code challenge

## Routes
```
POST     /test
```

## Usage
Use `POST` request with a JSON in a `Body` in a following format:
```json
{
    "arrTowers": [[2,1], [], []],
    "moves": [[0,1], [0,2], [1,2]]
}
```
## Expected outcome
```json
{
    "0":[[2,1],[],[]],
    "1":[[2],[1],[]],
    "2":[[],[1],[2]],
    "finish":[[],[],[2,1]],
    "solved":"✅"}
```
