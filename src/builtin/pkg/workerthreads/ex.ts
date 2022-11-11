import { Worker, isMainThread, parentPort, MessagePort } from "worker_threads";

if (isMainThread) {
  // main 인경우 = 한개만존재

  // __filename 파일에 대해서 자식스레드=워커스레드 1개 생성
  const worker = new Worker(__filename);

  // listeners
  worker.on("message", (message) => {
    console.log("From Worker", message);
  });
  worker.on("exit", () => {
    console.log("Worker Exit");
  });

  // to worker post message
  worker.postMessage("ping"); // 워커에게 메시지 보내기
} else {
  //  워커스레드로 생성된 경우

  // from parent listen message
  parentPort?.on("message", (value) => {
    // 워커에서 on을 사용할 경우 종료도 해야함
    console.log("From Parent", value);

    // to parent post message
    parentPort?.postMessage("pong");
    parentPort?.close(); // 부모와의 연결 종료
  });
}
