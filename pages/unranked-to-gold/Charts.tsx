import React, { useState } from 'react';
import games from './data/processed.json';

interface Champion {
  id: number;
  name: string;
}
interface Game {
  result: 'WIN' | 'LOSE';
  champion: Champion;
  opponent: Champion;
  createdAt: string;
  position: string;
  tierInfo: {
    tier: string;
    division: string;
    lp: number;
  };
  stats: {
    kill: number;
    death: number;
    assist: number;
  };
}
console.log(games);
export const LPGains: React.FC = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      {count}
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
};

// Process data
// import matchups0 from './data/matchups0.json';
// import matchups1 from './data/matchups1.json';
// import matchups2 from './data/matchups2.json';
// import matchups3 from './data/matchups3.json';
// import matchups4 from './data/matchups4.json';
// import matchups5 from './data/matchups5.json';
// import matchups6 from './data/matchups6.json';
// import matchups7 from './data/matchups7.json';
// import champions from './data/champions.json';
// function convertGames(rawData: any): Game[] {
//   return rawData
//     .filter((d) => !d.is_remake)
//     .map((d): Game => {
//       const champ = champions.data.find((c) => c.id === d.myData.champion_id);
//       const champion = {
//         id: d.myData.champion_id,
//         name: champ.name,
//         avatar: champ.image_url,
//       };
//       const op = d.participants.find(
//         (p) =>
//           p.team_key !== d.myData.team_key && p.position === d.myData.position
//       );
//       const opp = champions.data.find((c) => c.id === op.champion_id);
//       const opponent = {
//         id: op.champion_id,
//         name: opp.name,
//         avatar: opp.image_url,
//       };
//       return {
//         result: d.myData.stats.result,
//         createdAt: d.created_at,
//         position: d.myData.position,
//         champion,
//         opponent,
//         stats: {
//           kill: d.myData.stats.kill,
//           death: d.myData.stats.death,
//           assist: d.myData.stats.assist,
//         },
//         tierInfo: {
//           tier: d.myData.tier_info.tier,
//           division: d.myData.tier_info.division,
//           lp: d.myData.tier_info.lp,
//         },
//       };
//     });
// }
// const result = [
//   matchups7,
//   matchups6,
//   matchups5,
//   matchups4,
//   matchups3,
//   matchups2,
//   matchups1,
//   matchups0,
// ].flatMap((raw) => convertGames(raw.data));
// console.log(result);
