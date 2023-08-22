const GetAllContest = () => {
  return (
    <div>
      <div className="example">
        <h2 className="short-header">Get All Contests</h2>
        <p>
          The url format is <code>/api/all</code>
          <br />
        </p>

        <p>
          Example:{" "}
          <a className="exm" href="/api/all" target="_blank">
            /api/all
          </a>
          <br />
          Response:
        </p>

        <pre>
          {`
{
  "ok": true,
  "data": {
      "atcoder": [
          {
              "name": "GAMEFREAK Programming Contest 2023 (AtCoder Beginner Contest 317)",
              "url": "https://atcoder.jp/contests/abc317",
              "startTime": "26-08-2023 12:00:00 UTC",
              "duration": "1 hour 40 minutes",
              "durationSeconds": 6000
          }
      ],
      "codechef": [
          {
              "name": "Starters 100 (Unrated)",
              "url": "https://www.codechef.com/START100",
              "startTime": "30-08-2023 04:30:00 UTC",
              "duration": "12 hours",
              "durationSeconds": 43200
          }
      ],

      ...
  },
  "lastUpdated": "22-08-2023 20:30:17 UTC"
}
`}
        </pre>
      </div>
    </div>
  );
};

export default GetAllContest;
