import React from 'react';
import games from './data/processed.json';
import {
  AreaChart,
  Area,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
  ResponsiveContainer,
} from 'recharts';

interface Champion {
  id: number;
  name: string;
}
interface Game {
  result: string; // 'WIN' | 'LOSE';
  champion: Champion;
  opponent: Champion;
  createdAt: string;
  position: string;
  tierInfo: {
    tier: string | null;
    division: number | null;
    lp: number | null;
  };
  stats: {
    kill: number;
    death: number;
    assist: number;
  };
}
const sortedGames: Game[] = games.reverse();

// eslint-disable-next-line
const CustomTooltip = (props: any) => {
  if (!props.active || !props.payload) {
    return null;
  }
  const game: Game = props.payload[0].payload;
  const date = new Date(game.createdAt);
  const result = game.result === 'WIN' ? 'Victory' : 'Defeat';
  const lp = game.tierInfo.tier
    ? `${game.tierInfo.tier} ${game.tierInfo.division} ${game.tierInfo.lp}LP`
    : 'N/A';
  return (
    <div
      className="card pages-card"
      style={{
        background: 'var(--color-background)',
        padding: 'var(--spacing-3)',
      }}
    >
      <div>
        {result} - {date.getDate()}/{date.getMonth()}
      </div>
      <div>
        {game.position}: {game.champion.name} vs {game.opponent.name}
      </div>
      <div>
        KDA: {game.stats.kill}/{game.stats.death}/{game.stats.assist}
      </div>
      <div>Rank: {lp}</div>
    </div>
  );
};

export const LPGains: React.FC = () => {
  return (
    <ResponsiveContainer height={300}>
      <AreaChart data={sortedGames}>
        <CartesianGrid strokeDasharray="3 3" horizontal={false} />
        <Area
          type="monotone"
          dataKey={(d: Game) => {
            const { tier, division, lp } = d.tierInfo;
            if (tier === null || division === null || lp === null) {
              return 0;
            }
            const order = ['IRON', 'BRONZE', 'SILVER', 'GOLD'];
            const idx = order.indexOf(tier) + 1;
            const realLp = idx * 400 - division * 100 + lp;
            return realLp;
          }}
          stroke="var(--color-primary)"
          fill="var(--color-primary)"
        />
        <Tooltip content={<CustomTooltip />} />
        <ReferenceLine
          y={400}
          label={{
            value: 'Bronze',
            fill: 'var(--color-text)',
          }}
          stroke="var(--color-title)"
          strokeDasharray="3 3"
        />
        <ReferenceLine
          y={800}
          label={{
            value: 'Silver',
            fill: 'var(--color-text)',
          }}
          stroke="var(--color-title)"
          strokeDasharray="3 3"
        />
        <ReferenceLine
          y={1200}
          label={{
            value: 'Gold',
            fill: 'var(--color-text)',
          }}
          stroke="var(--color-title)"
        />
        <ReferenceLine
          x="10"
          stroke="var(--color-title)"
          label={{
            value: 'Rpmt',
            fill: 'var(--color-text)',
          }}
        />
        <ReferenceLine
          x="35"
          stroke="var(--color-title)"
          label={{
            value: 'E.B.',
            fill: 'var(--color-text)',
          }}
        />
        <ReferenceLine
          x="68"
          stroke="var(--color-title)"
          label={{
            value: 'S.1.B.',
            fill: 'var(--color-text)',
          }}
        />
        <ReferenceLine
          x="127"
          stroke="var(--color-title)"
          label={{
            value: 'L.G.G.',
            fill: 'var(--color-text)',
          }}
        />
      </AreaChart>
    </ResponsiveContainer>
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
