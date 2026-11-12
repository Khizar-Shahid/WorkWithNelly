
import Image from 'next/image';
import Link from 'next/link';
import { PortableText, type PortableTextComponents } from '@portabletext/react';
import { urlForImage } from '@/sanity/lib/image';

function PostBodyStyles() {
    return (
        <style>{`
      .post-body {
        color: #4A4A4A;
        font-size: 18px;
        line-height: 1.85;
        overflow-wrap: break-word;
      }

      .post-body p {
        margin: 0 0 24px;
        color: #4A4A4A;
      }

      .post-body h2 {
        margin: 54px 0 20px;
        color: #1E2F5A;
        font-family: Sora, sans-serif;
        font-size: clamp(26px, 4vw, 32px);
        font-weight: 700;
        line-height: 1.25;
        letter-spacing: -0.025em;
      }

      .post-body h3 {
        margin: 40px 0 16px;
        color: #1E2F5A;
        font-family: Sora, sans-serif;
        font-size: clamp(22px, 3vw, 26px);
        font-weight: 700;
        line-height: 1.35;
      }

      .post-body h4 {
        margin: 30px 0 12px;
        color: #1E2F5A;
        font-family: Sora, sans-serif;
        font-size: 20px;
        font-weight: 700;
        line-height: 1.4;
      }

      .post-body strong {
        color: #1E2F5A;
        font-weight: 700;
      }

      .post-body ul {
        list-style: disc;
        margin: 0 0 28px;
        padding-left: 30px;
      }

      .post-body ol {
        list-style: decimal;
        margin: 0 0 28px;
        padding-left: 30px;
      }

      .post-body li {
        margin: 0 0 12px;
        padding-left: 5px;
        line-height: 1.8;
      }

      .post-body li::marker {
        color: #C9A227;
        font-weight: 700;
      }

      .post-body li p {
        margin-bottom: 8px;
      }

      .post-body a {
        color: #1E2F5A;
        font-weight: 600;
        text-decoration: underline;
        text-decoration-color: #C9A227;
        text-decoration-thickness: 2px;
        text-underline-offset: 4px;
        transition: color 0.2s ease;
      }

      .post-body a:hover {
        color: #9D7E1E;
      }

      .post-body a:focus-visible {
        outline: 2px solid #C9A227;
        outline-offset: 3px;
        border-radius: 2px;
      }

      .post-body blockquote {
        margin: 38px 0;
        padding: 22px 28px;
        border-left: 5px solid #C9A227;
        border-radius: 0 14px 14px 0;
        background: #FAF6F1;
        color: #1E2F5A;
        font-family: Fraunces, serif;
        font-size: 20px;
        font-style: italic;
        line-height: 1.75;
      }

      .post-body blockquote p {
        margin: 0;
        color: #1E2F5A;
      }

      /* Responsive table wrapper */
      .post-body .pb-table-wrap {
        width: 100%;
        margin: 38px 0;
        overflow-x: auto;
        border: 1px solid #E7E7E7;
        border-radius: 14px;
        background: #FFFFFF;
        box-shadow: 0 8px 24px rgba(19, 29, 56, 0.06);
        -webkit-overflow-scrolling: touch;
      }

      .post-body table {
        width: 100%;
        min-width: 540px;
        border-collapse: collapse;
        font-size: 15px;
        line-height: 1.65;
      }

      .post-body thead th {
        padding: 17px 20px;
        border: 1px solid #35466F;
        background: #1E2F5A;
        color: #FFFFFF;
        text-align: left;
        vertical-align: top;
        font-family: Sora, sans-serif;
        font-size: 14px;
        font-weight: 700;
      }

      .post-body thead th p {
        margin: 0;
        color: #FFFFFF;
      }

      .post-body tbody td {
        padding: 16px 20px;
        border-bottom: 1px solid #E7E7E7;
        color: #4A4A4A;
        vertical-align: top;
      }

      .post-body tbody td p {
        margin: 0 0 8px;
        color: inherit;
      }

      .post-body tbody tr:nth-child(even) td {
        background: #F7F3EB;
      }

      .post-body tbody tr:hover td {
        background: #EFE6D3;
      }

      .post-body figure {
        margin: 40px 0;
      }

      .post-body figure img {
        width: 100%;
        height: auto;
        border: 1px solid #E7E7E7;
        border-radius: 16px;
        box-shadow: 0 10px 28px rgba(19, 29, 56, 0.10);
      }

      .post-body figcaption {
        margin-top: 12px;
        color: #777777;
        font-size: 13px;
        font-style: italic;
        text-align: center;
      }

      @media (max-width: 640px) {
        .post-body {
          font-size: 16px;
          line-height: 1.8;
        }

        .post-body h2 {
          margin-top: 42px;
        }

        .post-body h3 {
          margin-top: 32px;
        }

        .post-body blockquote {
          padding: 18px 20px;
          font-size: 18px;
        }

        .post-body .pb-table-wrap {
          margin: 30px 0;
        }

        .post-body table {
          min-width: 500px;
          font-size: 14px;
        }

        .post-body thead th,
        .post-body tbody td {
          padding: 13px 15px;
        }
      }
    `}</style>
    );
}

const components: PortableTextComponents = {
    marks: {
        link: ({ value, children }) => {
            const href: string = value?.href || '#';

            const isInternal =
                href.startsWith('/') && !href.startsWith('//');

            const isExternal = /^https?:\/\//i.test(href);

            if (isInternal) {
                return <Link href={href}>{children}</Link>;
            }

            return (
                <a
                    href={href}
                    target={isExternal ? '_blank' : undefined}
                    rel={isExternal ? 'noopener noreferrer' : undefined}
                >
                    {children}
                </a>
            );
        },

        strong: ({ children }) => <strong>{children}</strong>,
    },

    types: {
        image: ({ value }) => {
            if (!value?.asset) return null;

            return (
                <figure>
                    <Image
                        src={urlForImage(value).width(1200).url()}
                        alt={value.alt || ''}
                        width={1200}
                        height={800}
                        sizes="(max-width: 820px) 100vw, 800px"
                    />

                    {value.caption && (
                        <figcaption>{value.caption}</figcaption>
                    )}
                </figure>
            );
        },

        table: ({ value }) => {
            const rows = Array.isArray(value?.rows) ? value.rows : [];

            if (rows.length === 0) return null;

            const headerRows = Math.max(
                0,
                Math.min(Number(value?.headerRows ?? 1), rows.length)
            );

            const renderCell = (cell: any) => {
                if (Array.isArray(cell?.value) && cell.value.length > 0) {
                    return (
                        <PortableText
                            value={cell.value}
                            components={components}
                        />
                    );
                }

                if (
                    typeof cell?.value === 'string' ||
                    typeof cell?.value === 'number'
                ) {
                    return String(cell.value);
                }

                if (typeof cell === 'string' || typeof cell === 'number') {
                    return String(cell);
                }

                return null;
            };

            const renderRow = (
                row: any,
                rowIndex: number,
                isHeader: boolean
            ) => {
                const Cell = isHeader ? 'th' : 'td';

                return (
                    <tr key={row?._key || rowIndex}>
                        {(row?.cells || []).map((cell: any, cellIndex: number) => (
                            <Cell key={cell?._key || cellIndex}>
                                {renderCell(cell)}
                            </Cell>
                        ))}
                    </tr>
                );
            };

            return (
                <div className="pb-table-wrap">
                    <table>
                        {headerRows > 0 && (
                            <thead>
                                {rows
                                    .slice(0, headerRows)
                                    .map((row: any, index: number) =>
                                        renderRow(row, index, true)
                                    )}
                            </thead>
                        )}

                        <tbody>
                            {rows
                                .slice(headerRows)
                                .map((row: any, index: number) =>
                                    renderRow(row, index + headerRows, false)
                                )}
                        </tbody>
                    </table>
                </div>
            );
        },
    },
};

export default function PostBody({ value }: { value: any[] }) {
    if (!Array.isArray(value) || value.length === 0) {
        return null;
    }

    return (
        <div className="post-body">
            <PostBodyStyles />
            <PortableText value={value} components={components} />
        </div>
    );
}
