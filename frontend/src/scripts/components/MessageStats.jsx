import React from 'react';

export default function MessageStats({counts}) {
  return (
    <div>
      Daily word count
      <div>
        {Object.keys(counts.acumWordCount.daily).map(k =>
          <h3>{k}: {counts.acumWordCount.daily[k]} words</h3>
        )}
      </div>
      <br />

      Weekly word count
      <div>
        {Object.keys(counts.acumWordCount.weekly).map(k =>
          <h3>{k}: {counts.acumWordCount.weekly[k]} words</h3>
        )}
      </div>
    </div>
  );
}

// export default MessageStats;
