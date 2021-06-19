import Link from "next/link";
import React, { ReactNode } from "react";

type Props = {
  total: number;
  size: number;
  currentPage: number;
  variableName?: string;
};

export function CustomPagination(props: Props) {
  const variableName = props.variableName ? props.variableName : "page";
  let pageCount = Math.ceil(props.total / props.size);
  let start = props.currentPage < 4 ? 1 : props.currentPage - 1;
  let end = 3 + start;
  end = pageCount < end ? pageCount : end;
  let diff = start - end + 4;
  start -= start - diff > 0 ? diff : 0;
  let pages: ReactNode[] = [];

  const search = new URLSearchParams(
    process.browser ? window.location.search : null
  );
  search.delete(variableName);
  const base: string =
    "?" + (search.toString() !== "" ? search.toString() + "&" : "");
  console.log("pageCount", pageCount);

  //Construct Previous Page
  pages.push(
    <li
      key="_previous"
      className={
        "paginate_button page-item " +
        (props.currentPage === 1 ? "disabled" : "")
      }
    >
      <Link href={base + variableName + "=" + (props.currentPage - 1)}>
        <a className="page-link">{"<"}</a>
      </Link>
    </li>
  );

  // if (start > 1) {
  //   pages.push(
  //     <li
  //       key="_first"
  //       className={
  //         "paginate_button page-item " +
  //         (props.currentPage === 1 ? "active" : "d-none d-sm-block")
  //       }
  //     >
  //       <Link href={base + variableName + "=" + 1}>
  //         <a className="page-link">1</a>
  //       </Link>
  //     </li>
  //   );

  //   pages.push(
  //     <li
  //       key="_first-dot"
  //       className={"paginate_button page-item disabled d-none d-sm-block"}
  //     >
  //       <Link href="#">
  //         <a className="page-link">• • •</a>
  //       </Link>
  //     </li>
  //   );
  // }

  //Construct Center Page
  // for (let i = start; i <= end; i++) {
  //   pages.push(
  //     <li
  //       key={i}
  //       className={
  //         "paginate_button page-item " +
  //         (props.currentPage === i ? "active" : "d-none d-sm-block")
  //       }
  //     >
  //       <Link href={base + variableName + "=" + i}>
  //         <a className="page-link">{i}</a>
  //       </Link>
  //     </li>
  //   );
  // }

  //Construct Next Page
  // if (end < pageCount) {
  //   pages.push(
  //     <li
  //       key="_last-dot"
  //       className={"paginate_button page-item disabled d-none d-sm-block"}
  //     >
  //       <Link href="#">
  //         <a className="page-link">• • •</a>
  //       </Link>
  //     </li>
  //   );

  //   pages.push(
  //     <li
  //       key="_last"
  //       className={
  //         "paginate_button page-item " +
  //         (props.currentPage === pageCount ? "active" : "d-none d-sm-block")
  //       }
  //     >
  //       <Link href={base + variableName + "=" + pageCount}>
  //         <a className="page-link">{pageCount}</a>
  //       </Link>
  //     </li>
  //   );
  // }

  pages.push(
    <li
      key="next"
      className={
        "paginate_button page-item " + (props.total === 0 ? "disabled" : "")
      }
    >
      <Link href={base + variableName + "=" + (props.currentPage + 1)}>
        <a className="page-link">{">"}</a>
      </Link>
    </li>
  );

  return (
    <div className="row mb-5">
      <div className="col-12">
        <div className="text-center">
          Showing{" "}
          {(props.currentPage - 1) * props.size + (props.total > 0 ? 1 : 0)} to{" "}
          {props.currentPage * props.size > props.total
            ? props.total
            : props.currentPage * props.size}{" "}
          of {props.total} entries
        </div>
      </div>

      <div className="col-12 mt-2">
        <ul className="pagination justify-content-center mb-0">{pages}</ul>
      </div>
    </div>
  );
}
