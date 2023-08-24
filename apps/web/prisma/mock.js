const { TAGS } = require('./tags')

const mock = {
  accounts: [
    {
      id: 'account1',
      userId: 'user1',
      type: 'type1',
      provider: 'provider1',
      providerAccountId: 'providerAccount1',
      refresh_token: 'refreshToken1',
      access_token: 'accessToken1',
      expires_at: 1234567890,
      token_type: 'tokenType1',
      scope: 'scope1',
      id_token: 'idToken1',
      session_state: 'sessionState1',
    },
    {
      id: 'account2',
      userId: 'user2',
      type: 'type2',
      provider: 'provider2',
      providerAccountId: 'providerAccount2',
      refresh_token: 'refreshToken2',
      access_token: 'accessToken2',
      expires_at: 2345678901,
      token_type: 'tokenType2',
      scope: 'scope2',
      id_token: 'idToken2',
      session_state: 'sessionState2',
    },
    // Add more account mock data here...
  ],
  sessions: [
    {
      id: 'session1',
      sessionToken: 'sessionToken1',
      userId: 'user1',
      expires: new Date('2023-06-01T00:00:00Z'),
    },
    {
      id: 'session2',
      sessionToken: 'sessionToken2',
      userId: 'user2',
      expires: new Date('2023-06-01T00:00:00Z'),
    },
    // Add more session mock data here...
  ],
  users: [
    {
      id: 'user1',
      name: 'John Doe',
      email: 'john@example.com',
      emailVerified: new Date('2023-05-31T00:00:00Z'),
      password: 'password1',
      image: 'image1.jpg',
    },
    {
      id: 'user2',
      name: 'Jane Smith',
      email: 'jane@example.com',
      emailVerified: new Date('2023-05-31T00:00:00Z'),
      password: 'password2',
      image: 'image2.jpg',
    },
    // Add more user mock data here...
  ],
  verificationTokens: [
    {
      identifier: 'identifier1',
      token: 'token1',
      expires: new Date('2023-06-01T00:00:00Z'),
    },
    {
      identifier: 'identifier2',
      token: 'token2',
      expires: new Date('2023-06-01T00:00:00Z'),
    },
    // Add more verification token mock data here...
  ],
  spots: [
    {
      id: 'spot1',
      createdAt: new Date('2023-06-01T00:00:00Z'),
      updatedAt: new Date('2023-06-01T00:00:00Z'),
      name: 'Spot 1',
      description:
        'Spot 1 description: Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute',
      address: 'Address 1',
      city: 'City 1',
      state: 'State 1',
      country: 'Country 1',
      latitude: -20.57646864808083,
      longitude: -48.56902588408823,
      images: [
        'https://images.unsplash.com/photo-1583146200984-f2dfc3d1e27c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        'https://images.unsplash.com/photo-1627818125868-11de033324ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1017&q=80',
        'https://images.unsplash.com/photo-1598901627264-c1d0c98a61f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
        'https://images.unsplash.com/photo-1621418471925-6d7eb1ef2a34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
      ],
      userId: 'user1',
      tagName: 'soccer',
    },
    {
      id: 'spot2',
      createdAt: new Date('2023-06-01T00:00:00Z'),
      updatedAt: new Date('2023-06-01T00:00:00Z'),
      name: 'Spot 2',
      description:
        'Spot 2 description: Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute',
      address: 'Address 2',
      city: 'City 2',
      state: 'State 2',
      country: 'Country 2',
      latitude: -20.56762003241209,
      longitude: -48.5653164180221,
      images: [
        'https://plus.unsplash.com/premium_photo-1681558921634-f73645bde42f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1285&q=80',
        'https://images.unsplash.com/photo-1622057667220-7e0c8976ca6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
        'https://images.unsplash.com/photo-1594017689643-bbf527bf4fbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=737&q=80',
        'https://images.unsplash.com/photo-1607349731959-2115dbb2f557?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80',
      ],
      userId: 'user2',
      tagName: 'bike',
    },
    {
      id: 'spot3',
      createdAt: new Date('2023-06-01T00:00:00Z'),
      updatedAt: new Date('2023-06-01T00:00:00Z'),
      name: 'Spot 3',
      description:
        'Spot 3 description: Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute',
      address: 'Address 3',
      city: 'City 3',
      state: 'State 3',
      country: 'Country 3',
      latitude: -20.56762003241209,
      longitude: -48.5653164180221,
      images: [
        'https://plus.unsplash.com/premium_photo-1681558921634-f73645bde42f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1285&q=80',
        'https://images.unsplash.com/photo-1622057667220-7e0c8976ca6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
        'https://images.unsplash.com/photo-1594017689643-bbf527bf4fbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=737&q=80',
        'https://images.unsplash.com/photo-1607349731959-2115dbb2f557?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80',
      ],
      userId: 'user2',
      tagName: 'bike',
    },
    // Add more spot mock data here...
  ],
  tags: TAGS.map((tag) => ({
    id: `tag-${tag.value}`,
    createdAt: new Date('2023-06-01T00:00:00Z'),
    updatedAt: new Date('2023-06-01T00:00:00Z'),
    name: tag.label,
  })),
  ratings: [
    {
      id: 'rating1',
      createdAt: new Date('2023-06-01T00:00:00Z'),
      updatedAt: new Date('2023-06-01T00:00:00Z'),
      rating: 5,
      comment: 'Great spot!',
      spotId: 'spot1',
      userId: 'user1',
    },
    {
      id: 'rating2',
      createdAt: new Date('2023-06-01T00:00:00Z'),
      updatedAt: new Date('2023-06-01T00:00:00Z'),
      rating: 4,
      comment: 'Nice place!',
      spotId: 'spot2',
      userId: 'user2',
    },
    // Add more rating mock data here...
  ],
  favorites: [
    {
      id: 'favorite1',
      createdAt: new Date('2023-06-01T00:00:00Z'),
      updatedAt: new Date('2023-06-01T00:00:00Z'),
      spotId: 'spot1',
      userId: 'user1',
    },
    {
      id: 'favorite2',
      createdAt: new Date('2023-06-01T00:00:00Z'),
      updatedAt: new Date('2023-06-01T00:00:00Z'),
      spotId: 'spot2',
      userId: 'user2',
    },
    // Add more favorite mock data here...
  ],
}

module.exports = {
  mock,
}
