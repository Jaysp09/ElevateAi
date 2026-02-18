// "use client";

// import React from "react";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";
// import {
//   BriefcaseIcon,
//   LineChart,
//   TrendingUp,
//   TrendingDown,
//   Brain,
// } from "lucide-react";
// import { format, formatDistanceToNow } from "date-fns";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Progress } from "@/components/ui/progress";

// const DashboardView = ({ insights }) => {
//   // Transform salary data for the chart
//   const salaryData = insights.salaryRanges.map((range) => ({
//     name: range.role,
//     min: range.min / 1000,
//     max: range.max / 1000,
//     median: range.median / 1000,
//   }));

//   const getDemandLevelColor = (level) => {
//     switch (level.toLowerCase()) {
//       case "high":
//         return "bg-green-500";
//       case "medium":
//         return "bg-yellow-500";
//       case "low":
//         return "bg-red-500";
//       default:
//         return "bg-gray-500";
//     }
//   };

//   const getMarketOutlookInfo = (outlook) => {
//     switch (outlook.toLowerCase()) {
//       case "positive":
//         return { icon: TrendingUp, color: "text-green-500" };
//       case "neutral":
//         return { icon: LineChart, color: "text-yellow-500" };
//       case "negative":
//         return { icon: TrendingDown, color: "text-red-500" };
//       default:
//         return { icon: LineChart, color: "text-gray-500" };
//     }
//   };

//   const OutlookIcon = getMarketOutlookInfo(insights.marketOutlook).icon;
//   const outlookColor = getMarketOutlookInfo(insights.marketOutlook).color;

//   // Format dates using date-fns
//   const lastUpdatedDate = format(new Date(insights.lastUpdated), "dd/MM/yyyy");
//   const nextUpdateDistance = formatDistanceToNow(
//     new Date(insights.nextUpdate),
//     { addSuffix: true }
//   );

//   return (
//     <div className="space-y-6">
//       <div className="flex justify-between items-center">
//         <Badge variant="outline">Last updated: {lastUpdatedDate}</Badge>
//       </div>

//       {/* Market Overview Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//         <Card>
//           <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//             <CardTitle className="text-sm font-medium">
//               Market Outlook
//             </CardTitle>
//             <OutlookIcon className={`h-4 w-4 ${outlookColor}`} />
//           </CardHeader>
//           <CardContent>
//             <div className="text-2xl font-bold">{insights.marketOutlook}</div>
//             <p className="text-xs text-muted-foreground">
//               Next update {nextUpdateDistance}
//             </p>
//           </CardContent>
//         </Card>

//         <Card>
//           <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//             <CardTitle className="text-sm font-medium">
//               Industry Growth
//             </CardTitle>
//             <TrendingUp className="h-4 w-4 text-muted-foreground" />
//           </CardHeader>
//           <CardContent>
//             <div className="text-2xl font-bold">
//               {insights.growthRate.toFixed(1)}%
//             </div>
//             <Progress value={insights.growthRate} className="mt-2" />
//           </CardContent>
//         </Card>

//         <Card>
//           <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//             <CardTitle className="text-sm font-medium">Demand Level</CardTitle>
//             <BriefcaseIcon className="h-4 w-4 text-muted-foreground" />
//           </CardHeader>
//           <CardContent>
//             <div className="text-2xl font-bold">{insights.demandLevel}</div>
//             <div
//               className={`h-2 w-full rounded-full mt-2 ${getDemandLevelColor(
//                 insights.demandLevel
//               )}`}
//             />
//           </CardContent>
//         </Card>

//         <Card>
//           <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//             <CardTitle className="text-sm font-medium">Top Skills</CardTitle>
//             <Brain className="h-4 w-4 text-muted-foreground" />
//           </CardHeader>
//           <CardContent>
//             <div className="flex flex-wrap gap-1">
//               {insights.topSkills.map((skill) => (
//                 <Badge key={skill} variant="secondary">
//                   {skill}
//                 </Badge>
//               ))}
//             </div>
//           </CardContent>
//         </Card>
//       </div>

//       {/* Salary Ranges Chart */}
//       <Card className="col-span-4">
//         <CardHeader>
//           <CardTitle>Salary Ranges by Role</CardTitle>
//           <CardDescription>
//             Displaying minimum, median, and maximum salaries (in thousands)
//           </CardDescription>
//         </CardHeader>
//         <CardContent>
//           <div className="h-[400px]">
//             <ResponsiveContainer width="100%" height="100%">
//               <BarChart data={salaryData}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="name" />
//                 <YAxis />
//                 <Tooltip
//                   content={({ active, payload, label }) => {
//                     if (active && payload && payload.length) {
//                       return (
//                         <div className="bg-background border rounded-lg p-2 shadow-md">
//                           <p className="font-medium">{label}</p>
//                           {payload.map((item) => (
//                             <p key={item.name} className="text-sm">
//                               {item.name}: ${item.value}K
//                             </p>
//                           ))}
//                         </div>
//                       );
//                     }
//                     return null;
//                   }}
//                 />
//                 <Bar dataKey="min" fill="#94a3b8" name="Min Salary (K)" />
//                 <Bar dataKey="median" fill="#64748b" name="Median Salary (K)" />
//                 <Bar dataKey="max" fill="#475569" name="Max Salary (K)" />
//               </BarChart>
//             </ResponsiveContainer>
//           </div>
//         </CardContent>
//       </Card>

//       {/* Industry Trends */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         <Card>
//           <CardHeader>
//             <CardTitle>Key Industry Trends</CardTitle>
//             <CardDescription>
//               Current trends shaping the industry
//             </CardDescription>
//           </CardHeader>
//           <CardContent>
//             <ul className="space-y-4">
//               {insights.keyTrends.map((trend, index) => (
//                 <li key={index} className="flex items-start space-x-2">
//                   <div className="h-2 w-2 mt-2 rounded-full bg-primary" />
//                   <span>{trend}</span>
//                 </li>
//               ))}
//             </ul>
//           </CardContent>
//         </Card>

//         <Card>
//           <CardHeader>
//             <CardTitle>Recommended Skills</CardTitle>
//             <CardDescription>Skills to consider developing</CardDescription>
//           </CardHeader>
//           <CardContent>
//             <div className="flex flex-wrap gap-2">
//               {insights.recommendedSkills.map((skill) => (
//                 <Badge key={skill} variant="outline">
//                   {skill}
//                 </Badge>
//               ))}
//             </div>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default DashboardView;



"use client";

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  BriefcaseIcon,
  LineChart,
  TrendingUp,
  TrendingDown,
  Brain,
} from "lucide-react";
import { format, formatDistanceToNow } from "date-fns";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const formatCurrencyINR = (value) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);

const DashboardView = ({ insights }) => {
  const salaryData = insights.salaryRanges.map((range) => ({
    name: range.role,
    min: range.min,
    max: range.max,
    median: range.median,
  }));

  const getDemandLevelColor = (level) => {
    switch (level.toLowerCase()) {
      case "high":
        return "bg-green-500";
      case "medium":
        return "bg-yellow-500";
      case "low":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  const getMarketOutlookInfo = (outlook) => {
    switch (outlook.toLowerCase()) {
      case "positive":
        return { icon: TrendingUp, color: "text-green-400" };
      case "neutral":
        return { icon: LineChart, color: "text-yellow-400" };
      case "negative":
        return { icon: TrendingDown, color: "text-red-400" };
      default:
        return { icon: LineChart, color: "text-gray-400" };
    }
  };

  const OutlookIcon = getMarketOutlookInfo(insights.marketOutlook).icon;
  const outlookColor = getMarketOutlookInfo(insights.marketOutlook).color;

  const lastUpdatedDate = format(new Date(insights.lastUpdated), "dd/MM/yyyy");
  const nextUpdateDistance = formatDistanceToNow(
    new Date(insights.nextUpdate),
    { addSuffix: true }
  );

  return (
    <div className="relative min-h-screen p-6 overflow-hidden">
      {/* Animated Futuristic Gradient Background */}
      <div className="absolute inset-0 -z-10 animate-gradient-x bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#3b82f6] bg-[length:400%_400%] opacity-90"></div>

      <div className="flex justify-between items-center mb-6">
        <Badge variant="outline" className="bg-white text-black shadow-md">
          Last updated: {lastUpdatedDate}
        </Badge>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <GlassCard title="Market Outlook" Icon={OutlookIcon} iconColor={outlookColor}>
          <div className="text-2xl font-bold">{insights.marketOutlook}</div>
          <p className="text-xs text-muted-foreground">
            Next update {nextUpdateDistance}
          </p>
        </GlassCard>

        <GlassCard title="Industry Growth" Icon={TrendingUp}>
          <div className="text-2xl font-bold">{insights.growthRate.toFixed(1)}%</div>
          <Progress value={insights.growthRate} className="mt-2" />
        </GlassCard>

        <GlassCard title="Demand Level" Icon={BriefcaseIcon}>
          <div className="text-2xl font-bold">{insights.demandLevel}</div>
          <div className={`h-2 w-full rounded-full mt-2 ${getDemandLevelColor(insights.demandLevel)}`} />
        </GlassCard>

        <GlassCard title="Top Skills" Icon={Brain}>
          <div className="flex flex-wrap gap-1">
            {insights.topSkills.map((skill) => (
              <Badge key={skill} variant="secondary">
                {skill}
              </Badge>
            ))}
          </div>
        </GlassCard>
      </div>

      {/* 3D Bar Chart */}
      <Card className="col-span-4 bg-white/20 backdrop-blur-lg rounded-xl p-4 mt-8 shadow-2xl border border-white/30">
        <CardHeader>
          <CardTitle className="text-white">Salary Ranges by Role</CardTitle>
          <CardDescription className="text-gray-300">
            Displaying min, median, and max salaries in INR
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
            <BarChart
  data={salaryData}
  margin={{ top: 20, right: 30, left: 20, bottom: 70 }}
>

                <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
                <XAxis
  dataKey="name"
  stroke="#fff"
  angle={-25}
  textAnchor="end"
  interval={0}
/>

                <YAxis
                  tickFormatter={(value) => `₹${(value / 100000).toFixed(1)}L`}
                  stroke="#fff"
                />
                <Tooltip
                  content={({ active, payload, label }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="bg-black/80 text-white border border-white rounded-lg p-3 shadow-lg">
                          <p className="font-semibold">{label}</p>
                          {payload.map((item) => (
                            <p key={item.name} className="text-sm">
                              {item.name}: {formatCurrencyINR(item.value)}
                            </p>
                          ))}
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Bar
                  dataKey="min"
                  fill="url(#minGradient)"
                  name="Min Salary"
                  radius={[6, 6, 0, 0]}
                />
                <Bar
                  dataKey="median"
                  fill="url(#medianGradient)"
                  name="Median Salary"
                  radius={[6, 6, 0, 0]}
                />
                <Bar
                  dataKey="max"
                  fill="url(#maxGradient)"
                  name="Max Salary"
                  radius={[6, 6, 0, 0]}
                />
                <defs>
                  <linearGradient id="minGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.8} />
                    <stop offset="100%" stopColor="#1e3a8a" stopOpacity={0.6} />
                  </linearGradient>
                  <linearGradient id="medianGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#38bdf8" stopOpacity={0.9} />
                    <stop offset="100%" stopColor="#0ea5e9" stopOpacity={0.7} />
                  </linearGradient>
                  <linearGradient id="maxGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#06b6d4" stopOpacity={0.9} />
                    <stop offset="100%" stopColor="#0f172a" stopOpacity={0.7} />
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Industry Trends & Recommended Skills */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        <GlassCard title="Key Industry Trends">
          <ul className="space-y-4 text-white">
            {insights.keyTrends.map((trend, index) => (
              <li key={index} className="flex items-start space-x-2">
                <div className="h-2 w-2 mt-2 rounded-full bg-blue-400" />
                <span>{trend}</span>
              </li>
            ))}
          </ul>
        </GlassCard>

        <GlassCard title="Recommended Skills">
          <div className="flex flex-wrap gap-2">
            {insights.recommendedSkills.map((skill) => (
              <Badge key={skill} variant="outline" className="text-white border-white">
                {skill}
              </Badge>
            ))}
          </div>
        </GlassCard>
      </div>
    </div>
  );
};

const GlassCard = ({ title, Icon, iconColor = "text-blue-300", children }) => (
  <Card className="bg-white/20 backdrop-blur-md text-white shadow-2xl p-4 border border-white/30 rounded-xl transition-transform hover:scale-[1.02] duration-300">
    <CardHeader className="flex flex-row items-center justify-between pb-2">
      <CardTitle className="text-md font-semibold">{title}</CardTitle>
      {Icon && <Icon className={`h-5 w-5 ${iconColor}`} />}
    </CardHeader>
    <CardContent>{children}</CardContent>
  </Card>
);

export default DashboardView;
