import { useState } from 'react';

type UserProfileCardProps = {
  user: {
    name: string;
    email: string;
    avatar: string;
    role: string;
    status: string;
    stats: {
      posts?: number;
      followers?: number;
      following?: number;
      projects?: number;
      commits?: number;
      reviews?: number;
    };
  };

  theme: {
    backgroundColor: string;
    textColor: string;
    avatarBg: string;
    badgeBg: string;
  };

  actions: {
    primary: {
      label: string;
      onClick: () => void;
      className: string;
    };

    secondary: {
      label: string;
      onClick: () => void;
      className: string;
    };
  };
};

function UserProfileCard({ user, theme, actions }: UserProfileCardProps) {
  return (
    <div className='min-w-60 bg-white text-gray-800 p-5 m-2 text-sm flex flex-col'>
      <span> username: {user.name}</span>
      <span>email: {user.email}</span>
      <span>avatar: {user.role}</span>
      <span>status: {user.status}</span>
      <span>
        {Object.entries(user.stats).map(([key, value]) => (
          <div>
            {key}: {value}
          </div>
        ))}
      </span>
    </div>
  );
}

function ComplexProps() {
  const [message, setMessage] = useState<string>('');

  const users = [
    {
      user: {
        name: 'Alice Johnson',
        email: 'alice@example.com',
        avatar: '👩‍💼',
        role: 'Admin',
        status: 'Active',
        stats: {
          posts: 145,
          followers: 2834,
          following: 421,
        },
      },
      theme: {
        backgroundColor: 'bg-gradient-to-br from-purple-100 to-blue-100',
        textColor: 'text-gray-800',
        avatarBg: 'bg-purple-300',
        badgeBg: 'bg-purple-200',
      },
      actions: {
        primary: {
          label: 'View Profile',
          onClick: () => setMessage("Viewing Alice's profile"),
          className: 'bg-purple-500 text-white hover:bg-purple-600',
        },
        secondary: {
          label: 'Message',
          onClick: () => setMessage('Opening message to Alice'),
          className: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
        },
      },
    },
    {
      user: {
        name: 'Bob Smith',
        email: 'bob@example.com',
        avatar: '👨‍💻',
        role: 'Developer',
        status: 'Online',
        stats: {
          projects: 28,
          commits: 1523,
          reviews: 89,
        },
      },
      theme: {
        backgroundColor: 'bg-gradient-to-br from-green-100 to-teal-100',
        textColor: 'text-gray-800',
        avatarBg: 'bg-green-300',
        badgeBg: 'bg-green-200',
      },
      actions: {
        primary: {
          label: 'View Profile',
          onClick: () => setMessage("Viewing Bob's profile"),
          className: 'bg-green-500 text-white hover:bg-green-600',
        },
        secondary: {
          label: 'Collaborate',
          onClick: () => setMessage('Starting collaboration with Bob'),
          className: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
        },
      },
    },
  ];
  return (
    <div>
      <h1>ComplexProps</h1>
      <div className='flex'>
        {users.map((user, index) => (
          <UserProfileCard key={index} {...user} />
        ))}
      </div>
    </div>
  );
}
export default ComplexProps;
