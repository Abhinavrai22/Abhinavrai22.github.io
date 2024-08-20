import { useEffect, useState } from "react";

const Table1 = ({ columns, data, title = "", rowPerPageOptions = [10, 20, 50, 100] }) => {

	const [rowPerPage, setRowPerPage] = useState(10);
	const [page, setPage] = useState(1);
	const [firstIndex, setFirstIndex] = useState(0);
	const [lastIndex, setLastIndex] = useState(rowPerPage);

	const [tableData, setTableData] = useState([]);

	useEffect(() => {
		setTableData(data.length > 10 ? data.slice(firstIndex, lastIndex) : data);
	}, [data, rowPerPage, firstIndex, lastIndex]);

	const nextPage = (type) => {
		if (type === "next") {
			if (tableData.length < rowPerPage) return;
			setPage(prev => prev >= 1 ? prev + 1 : prev);
			setFirstIndex(lastIndex);
			setLastIndex(lastIndex + (tableData.length > rowPerPage ? rowPerPage : (data.length - lastIndex)));
		} else if (type === "prev") {
			if (page === 1 && tableData.length <= rowPerPage) return;
			setPage(prev => prev >= 1 ? prev - 1 : prev);
			setFirstIndex(firstIndex - rowPerPage);
			setLastIndex(tableData.length > rowPerPage ? lastIndex - rowPerPage : rowPerPage);
		}
	};

	return (
		<div className="w-full">
			<h1 className="text-xl font-medium my-4 pl-2 underline underline-offset-2">{title}</h1>
			<div className="w-full flex justify-between">
				<div className='flex p-2 space-x-2 items-center font-semibold text-gray-700 text-[13px]'>
					<p>Show</p>
					<div className=' sm:px-1 sm:rounded-md rounded-xl  bg-white'>
						<select
							name="rowPerPage"
							className='focus:ring-0 border focus:outline-none p-1'
							onChange={(e) => {
								setFirstIndex(0);
								setPage(1);
								setLastIndex(data.length > +e.target.value ? +e.target.value : data.length);
								setRowPerPage(+e.target.value);
							}}
						>
							{
								rowPerPageOptions.map((item, index) => (
									<option key={index} selected={+item === rowPerPage} value={item}>{item}</option>
								))
							}
						</select>
					</div>
					<p>entries</p>
				</div>
				<div>
					<span className="cursor-pointer" onClick={() => nextPage('prev')}>prev</span> : page no : {page} | {firstIndex + 1} - {lastIndex} | row - {rowPerPage} : <span onClick={() => nextPage('next')} className="cursor-pointer">Next</span>
				</div>
			</div>
			<table className="w-full">
				<thead className="bg-gray-700 w-full p-2 overflow-x-auto scroll-smooth text-white">
					<tr>
						{columns.map((column) => (
							<th className="p-3 min-w-[50px] text-center truncate  border-r-[1px] font-bold border-b-[1px] " key={column.accessor}>
								{column.header}
							</th>
						))}
					</tr>
				</thead>
				<tbody className="w-full overflow-x-auto scroll-smooth">
					{tableData.map((row, rowIndex) => (
						<tr className="border-b-[1px]" key={rowIndex}>
							{columns.map((column) => (
								<td className="px-2 py-2 text-sm text-center border-r-[1px] font-light" key={column.accessor}>
									{row[column.accessor]}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Table1;
