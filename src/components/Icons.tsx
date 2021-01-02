import * as React from 'react';

const Svg: React.FC = ({ children }) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    {children}
  </svg>
);

export const Close: React.FC = () => (
  <Svg>
    <path
      d="M19.393 21.24l-7.426-7.427L4.54 21.24l-2.114-2.114L9.853 11.7 2.426 4.273 4.57 2.13l7.427 7.427 7.427-7.427 2.113 2.113-7.427 7.427 7.427 7.427-2.143 2.143z"
      fill="currentColor"
      fillRule="nonzero"
    />
  </Svg>
);

export const Marker: React.FC = () => (
  <Svg>
    <path
      d="M11.936.5h-.033C7.931.5 4.7 3.73 4.7 7.7c0 2.604 1.185 6.038 3.523 10.21a56.75 56.75 0 003.508 5.486.26.26 0 00.208.104h.007a.26.26 0 00.209-.116c.017-.026 1.762-2.661 3.483-5.884 2.324-4.35 3.502-7.647 3.502-9.8 0-3.97-3.232-7.2-7.204-7.2zm3.325 7.377a3.345 3.345 0 01-3.341 3.341 3.345 3.345 0 01-3.342-3.341 3.345 3.345 0 013.342-3.342 3.345 3.345 0 013.341 3.342z"
      fill="currentColor"
      fillRule="nonzero"
    />
  </Svg>
);

export const List: React.FC = () => (
  <Svg>
    <circle cx="4.537" cy="6.418" r="1.466" fill="currentColor" transform="translate(-.258 -.269) scale(1.02293)" />
    <path fill="currentColor" d="M7.155 4.796h13.962v3H7.155z" />
    <circle cx="4.537" cy="6.418" r="1.466" fill="currentColor" transform="translate(-.258 5.354) scale(1.02293)" />
    <path fill="currentColor" d="M7.155 10.42h13.962v3H7.155z" />
    <circle cx="4.537" cy="6.418" r="1.466" fill="currentColor" transform="translate(-.258 10.978) scale(1.02293)" />
    <path fill="currentColor" d="M7.155 16.042h13.962v3H7.155z" />
  </Svg>
);

export const Trash: React.FC = () => (
  <Svg>
    <g fillRule="nonzero">
      <path d="M19.347 3.604h-3.849v-.7c0-1.157-.941-2.1-2.099-2.1h-2.798c-1.158 0-2.1.943-2.1 2.1v.7H4.654c-.964 0-1.75.784-1.75 1.749v2.449a.7.7 0 00.7.7h.383l.605 12.694c.053 1.121.974 2 2.096 2h10.626a2.097 2.097 0 002.096-2l.605-12.694h.382a.7.7 0 00.7-.7v-2.45c0-.964-.785-1.748-1.75-1.748zm-9.446-.7a.7.7 0 01.7-.7h2.798a.7.7 0 01.7.7v.7H9.901v-.7zM4.303 5.353a.35.35 0 01.35-.35h14.694a.35.35 0 01.35.35v1.75H4.303v-1.75zm13.709 15.776a.699.699 0 01-.7.667H6.688a.699.699 0 01-.699-.667L5.387 8.502h13.226l-.601 12.627z" fill="currentColor" />
      <path d="M12 20.396a.7.7 0 00.7-.7v-9.095a.7.7 0 00-1.4 0v9.096a.7.7 0 00.7.7zM15.498 20.396a.7.7 0 00.7-.7v-9.095a.7.7 0 00-1.4 0v9.096a.7.7 0 00.7.7zM8.502 20.396a.7.7 0 00.7-.7v-9.095a.7.7 0 00-1.4 0v9.096a.7.7 0 00.7.7z" fill="currentColor" />
    </g>
  </Svg>
);

export const Pen: React.FC = () => (
  <Svg>
    <path d="M20.908 14.965a.526.526 0 00-.526.526v4.667a1.578 1.578 0 01-1.576 1.576H4.057c-.87 0-1.576-.706-1.577-1.576V6.46a1.579 1.579 0 011.577-1.576h4.667a.526.526 0 100-1.052H4.057A2.631 2.631 0 001.43 6.46v13.698a2.631 2.631 0 002.628 2.628h14.749a2.631 2.631 0 002.628-2.628V15.49a.526.526 0 00-.526-.526z" fill="currentColor" fillRule="nonzero" />
    <path d="M21.226 2.48a2.365 2.365 0 00-3.346 0l-9.377 9.377a.525.525 0 00-.135.232L7.135 16.54a.526.526 0 00.647.647l4.452-1.234a.526.526 0 00.231-.135l9.377-9.377a2.368 2.368 0 000-3.345l-.616-.617zM9.648 12.199l7.675-7.675 2.475 2.475-7.675 7.675-2.475-2.475zm-.494.992l1.977 1.978-2.735.758.758-2.736zm11.945-7.493l-.557.558-2.476-2.475.558-.558a1.314 1.314 0 011.858 0l.617.617a1.316 1.316 0 010 1.858z" fill="currentColor" fillRule="nonzero" />
  </Svg>
);