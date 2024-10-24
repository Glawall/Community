export interface HelpRequest {
  title: string;
  author_id: number;
  help_type_id: number;
  description: string;
  created_at: number | string;
  req_date: number | string;
  status: string;
}

export interface HelpRequestBody {
  title: string;
  help_type: string;
  description: string;
  req_date: string;
  status: string;
}

export const helpRequestsData: HelpRequest[] = [
  {
    title: "Need help with grocery shopping",
    author_id: 1,
    help_type_id: 1,
    description:
      "I need someone to help me with my weekly grocery shopping this Monday",
    created_at: "2024-05-21T12:34:56.789Z",
    req_date: "2024-05-27T10:00:00.000Z",
    status: "active",
  },
  {
    title: "Assistance required for house cleaning",
    author_id: 2,
    help_type_id: 3,
    description: "I need help with cleaning my house this Saturday",
    created_at: "2024-05-22T09:15:30.456Z",
    req_date: "2024-05-25T14:00:00.000Z",
    status: "active",
  },
  {
    title: "Need a ride to the doctor's appointment",
    author_id: 3,
    help_type_id: 2,
    description:
      "I need someone to give me a ride to my doctor's appointment on Wednesday",
    created_at: "2024-05-20T16:45:12.234Z",
    req_date: "2024-05-29T11:30:00.000Z",
    status: "active",
  },
  {
    title: "Help needed with yard work",
    author_id: 4,
    help_type_id: 5,
    description:
      "I need someone to help me with yard work and gardening this weekend",
    created_at: "2024-05-19T08:20:45.678Z",
    req_date: "2024-05-25T09:00:00.000Z",
    status: "active",
  },
  {
    title: "Assistance required for package delivery",
    author_id: 5,
    help_type_id: 4,
    description:
      "I need someone to help me with delivering a package to my son's house",
    created_at: "2024-05-23T13:55:22.111Z",
    req_date: "2024-05-28T15:00:00.000Z",
    status: "active",
  },
  {
    title: "Need help with furniture assembly",
    author_id: 6,
    help_type_id: 5,
    description:
      "I need someone to help me assemble a new bookshelf I purchased",
    created_at: "2024-05-21T10:30:15.987Z",
    req_date: "2024-05-26T16:00:00.000Z",
    status: "active",
  },
  {
    title: "Grocery shopping assistance needed",
    author_id: 7,
    help_type_id: 1,
    description: "I need help with grocery shopping this Friday",
    created_at: "2024-05-22T14:20:45.321Z",
    req_date: "2024-05-24T10:00:00.000Z",
    status: "active",
  },
  {
    title: "Need a ride to the airport",
    author_id: 8,
    help_type_id: 2,
    description:
      "I need someone to give me a ride to the airport on Monday morning",
    created_at: "2024-05-20T09:45:30.654Z",
    req_date: "2024-05-27T07:00:00.000Z",
    status: "active",
  },
  {
    title: "Assistance required for house cleaning",
    author_id: 9,
    help_type_id: 3,
    description: "I need help with cleaning my house this Thursday",
    created_at: "2024-05-21T16:10:20.789Z",
    req_date: "2024-05-23T13:00:00.000Z",
    status: "active",
  },
  {
    title: "Need help with minor home repairs",
    author_id: 10,
    help_type_id: 5,
    description:
      "I need someone to help me with fixing a leaky faucet and hanging a shelf",
    created_at: "2024-05-19T11:35:45.123Z",
    req_date: "2024-05-24T15:00:00.000Z",
    status: "active",
  },
  {
    title: "Assistance with gardening needed",
    author_id: 1,
    help_type_id: 5,
    description: "I need help with weeding and planting flowers in my garden",
    created_at: "2024-05-22T10:45:12.789Z",
    req_date: "2024-05-26T09:00:00.000Z",
    status: "active",
  },
  {
    title: "Need help with grocery delivery",
    author_id: 2,
    help_type_id: 1,
    description:
      "I need someone to pick up my grocery order and deliver it to my house",
    created_at: "2024-05-21T14:20:30.456Z",
    req_date: "2024-05-25T11:00:00.000Z",
    status: "active",
  },
  {
    title: "Assistance required for moving furniture",
    author_id: 3,
    help_type_id: 5,
    description: "I need help moving some heavy furniture to a different room",
    created_at: "2024-05-20T09:15:45.234Z",
    req_date: "2024-05-27T14:00:00.000Z",
    status: "active",
  },
  {
    title: "Need a ride to the mall",
    author_id: 4,
    help_type_id: 2,
    description: "I need someone to give me a ride to the mall on Saturday",
    created_at: "2024-05-19T16:30:15.678Z",
    req_date: "2024-05-25T10:00:00.000Z",
    status: "active",
  },
  {
    title: "Assistance required for package pickup",
    author_id: 5,
    help_type_id: 4,
    description:
      "I need someone to pick up a package from the post office for me",
    created_at: "2024-05-23T11:45:22.111Z",
    req_date: "2024-05-28T13:00:00.000Z",
    status: "active",
  },
  {
    title: "Need help with laundry",
    author_id: 6,
    help_type_id: 3,
    description: "I need someone to help me with washing and folding laundry",
    created_at: "2024-05-21T08:20:15.987Z",
    req_date: "2024-05-26T14:00:00.000Z",
    status: "active",
  },
  {
    title: "Grocery shopping assistance needed",
    author_id: 7,
    help_type_id: 1,
    description: "I need help with grocery shopping this Wednesday",
    created_at: "2024-05-22T12:10:45.321Z",
    req_date: "2024-05-29T10:00:00.000Z",
    status: "active",
  },
  {
    title: "Need a ride to the train station",
    author_id: 8,
    help_type_id: 2,
    description:
      "I need someone to give me a ride to the train station on Friday morning",
    created_at: "2024-05-20T07:35:30.654Z",
    req_date: "2024-05-24T08:00:00.000Z",
    status: "active",
  },
];
