import crypto from 'crypto';

export const menu = [
  {
    id: crypto.randomUUID(),
    title: 'cheese burger',
    image:
      'https://img.search.brave.com/_kIYvR_2mD8KPIoKM1aUdXPXJoPxUykIpAPYBMY6tcE/rs:fit:1200:1080:1/g:ce/aHR0cHM6Ly90aGVk/ZWxpZ2h0ZnVsbGF1/Z2guY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIwLzA5L3Nt/YXNoZWQtZG91Ymxl/LWNoZWVzZWJ1cmdl/ci5qcGc',
    price: 15.99,
    category: 'main dish',
  },
  {
    id: crypto.randomUUID(),
    title: 'garlic fries',
    image:
      'https://img.search.brave.com/dHDiAA972dGMEjdSWMhzSvjLIz4FYsvRjYTXi2Nfvfg/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5E/QjNhZVZWVUV4V1hK/cEJvRmpsNjN3SGFF/OCZwaWQ9QXBp',
    price: 8.99,
    category: 'main dish',
  },
  {
    id: crypto.randomUUID(),
    title: 'coca cola',
    image:
      'https://img.search.brave.com/uQ9znK7pD-j1EkkbXSyti1gsfSWQqbpD3SEqGQl8P9A/rs:fit:1000:1000:1/g:ce/aHR0cHM6Ly93d3cu/cGFudHJ5aHViLmlu/L3VwbG9hZHMvcGFu/dHJ5aHViL3Byb2R1/Y3RzL2NvY2EtY29s/YS1zb2Z0LWRyaW5r/LW9yaWdpbmFsLXRh/c3RlLTEyNTAtbWwt/MTI1LWwtcGV0LWJv/dHRsZS04NjI2OTFf/bC5qcGc_cGFyYW09/MQ',
    price: 5.99,
    category: 'cold drink',
  },
  {
    id: crypto.randomUUID(),
    title: 'chocolate ice cream',
    image:
      'https://img.search.brave.com/DIizAmzP4NSfQUkOWUX2xPfdBZ0a7DlL2cY0RLLBdgI/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/dGFzaGFzYXJ0aXNh/bmZvb2RzLmNvbS9i/bG9nL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDE4LzA2L2Nob2Mt/aWNlY3JlYW0tNC5q/cGc',
    price: 5.99,
    category: 'dessert',
  },
];
