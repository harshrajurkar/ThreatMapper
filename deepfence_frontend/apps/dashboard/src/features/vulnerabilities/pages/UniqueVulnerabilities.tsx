import cx from 'classnames';
import { useMemo, useRef, useState } from 'react';
import { IconContext } from 'react-icons';
import { HiArrowSmLeft, HiDotsVertical, HiExternalLink } from 'react-icons/hi';
import { IoIosGitNetwork } from 'react-icons/io';
import { Badge, createColumnHelper, getRowSelectionColumn, Table } from 'ui-components';

import { DFLink } from '@/components/DFLink';
import { VulnerabilityIcon } from '@/components/sideNavigation/icons/Vulnerability';
import { VulnerabilityDetails } from '@/features/vulnerabilities/components/unique-vulnerabilities/VulnerabilityDetails';

type TableDataType = {
  rank: number;
  id: string;
  severity: string;
  score: number;
  attackVector: string;
  liveConnection: string;
  exploit: string;
  type: string;
  description: string;
  action?: null;
};

const data = Array.from(Array(25).keys()).map((i) => {
  return {
    rank: 1,
    id: 'CVE-2022-234',
    severity: i % 2 === 0 ? 'critical' : i % 3 === 0 ? 'medium' : 'low',
    score: i,
    attackVector: 'network',
    liveConnection: i % 2 === 0 ? 'yes' : 'no',
    exploit: 'Link',
    type: 'deepfence-poc-agent-2 + 1 image(s)',
    description:
      'Apache Log4j2 2.0-beta9 through 2.15.0 (excluding security releases 2.12.2, 2.12.3, and',
  };
});
const UniqueVulnerabilities = () => {
  const elementToFocusOnClose = useRef(null);
  const [showDetails, setShowDetails] = useState(false);

  const columnHelper = createColumnHelper<TableDataType>();
  const columns = useMemo(() => {
    const columns = [
      getRowSelectionColumn(columnHelper, {
        size: 0,
        minSize: 0,
        maxSize: 0,
      }),
      columnHelper.accessor('rank', {
        enableSorting: true,
        cell: (info) => info.getValue(),
        header: () => 'Rank',
        minSize: 10,
        size: 20,
        maxSize: 20,
      }),
      columnHelper.accessor('id', {
        enableSorting: false,
        cell: (info) => (
          <DFLink
            to="#"
            onClick={() => {
              setShowDetails(true);
            }}
            className="flex items-center gap-x-2"
          >
            <div className="p-2 bg-gray-100 dark:bg-gray-500/10 rounded-lg">
              <div className="w-5 h-5">
                <VulnerabilityIcon />
              </div>
            </div>
            {info.getValue()}
          </DFLink>
        ),
        header: () => 'CVE ID',
        minSize: 200,
      }),
      columnHelper.accessor('severity', {
        enableSorting: false,
        cell: (info) => (
          <Badge
            label={info.getValue()}
            className={cx({
              'bg-red-100 dark:bg-red-600/10 text-red-600 dark:text-red-400':
                info.getValue().toLocaleLowerCase() === 'critical',
              'bg-pink-100 dark:bg-pink-600/10 text-pink-600 dark:text-pink-400':
                info.getValue().toLocaleLowerCase() === 'high',
              'bg-blue-100 dark:bg-blue-600/10 text-blue-600 dark:text-blue-400':
                info.getValue().toLocaleLowerCase() === 'medium',
              'bg-yellow-300/20 dark:bg-yellow-400/10 text-yellow-500 dark:text-yellow-400':
                info.getValue().toLocaleLowerCase() === 'low',
            })}
            size="sm"
          />
        ),
        header: () => 'Severity',
        minSize: 60,
        size: 80,
        maxSize: 100,
      }),
      columnHelper.accessor('score', {
        enableSorting: true,
        cell: (info) => info.getValue(),
        header: () => 'Score',
        minSize: 20,
        size: 20,
        maxSize: 40,
      }),
      columnHelper.accessor('attackVector', {
        enableSorting: false,
        cell: (info) => (
          <div className="flex items-center gap-x-2">
            <div>
              <IconContext.Provider
                value={{
                  className: cx('w-4 h-4 text-gray-400 dark:text-gray-500'),
                }}
              >
                <IoIosGitNetwork />
              </IconContext.Provider>
            </div>
            {info.getValue()}
          </div>
        ),
        header: () => 'Attack Vector',
        minSize: 100,
      }),
      columnHelper.accessor('liveConnection', {
        enableSorting: false,
        cell: (info) => (
          <div
            className={cx('h-2.5 w-2.5 rounded-full', {
              'bg-green-400 text:bg-green-500': info.getValue() === 'yes',
              'bg-gray-400 text:bg-gray-500': info.getValue() === 'no',
            })}
          ></div>
        ),
        header: () => 'Live',
        minSize: 50,
        size: 60,
      }),
      columnHelper.accessor('exploit', {
        enableSorting: false,
        cell: () => (
          <DFLink to="#">
            <IconContext.Provider
              value={{
                className: 'w-4 h-4',
              }}
            >
              <HiExternalLink />
            </IconContext.Provider>
          </DFLink>
        ),
        header: () => 'Exploit',
        minSize: 30,
        size: 50,
        maxSize: 50,
      }),
      columnHelper.accessor('type', {
        enableSorting: false,
        cell: (info) => info.getValue(),
        header: () => 'Asset Type',
        minSize: 300,
        size: 400,
        maxSize: 400,
      }),
      columnHelper.accessor('description', {
        enableSorting: false,
        cell: (info) => info.getValue(),
        header: () => 'Description',
        minSize: 300,
        size: 500,
        maxSize: 500,
      }),
      columnHelper.accessor('action', {
        enableSorting: false,
        cell: () => (
          <IconContext.Provider value={{ className: 'text-gray-700 dark:text-gray-400' }}>
            <HiDotsVertical />
          </IconContext.Provider>
        ),
        header: () => '',
        minSize: 10,
        size: 10,
        maxSize: 10,
      }),
    ];

    return columns;
  }, []);
  return (
    <div>
      <VulnerabilityDetails
        showDetails={showDetails}
        setShowFilter={setShowDetails}
        elementToFocusOnClose={elementToFocusOnClose.current}
      />
      <div className="flex p-2 pl-2 w-full items-center shadow bg-white dark:bg-gray-800">
        <DFLink
          to={'/vulnerability'}
          className="flex hover:no-underline items-center justify-center  mr-2"
        >
          <IconContext.Provider
            value={{
              className: 'w-5 h-5 text-blue-600 dark:text-blue-500 ',
            }}
          >
            <HiArrowSmLeft />
          </IconContext.Provider>
        </DFLink>
        <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
          UNIQUE VULNERABILITIES
        </span>
      </div>
      <div className="m-2">
        <Table
          size="sm"
          data={data}
          columns={columns}
          enableRowSelection
          enableSorting
          getRowCanExpand={() => {
            return true;
          }}
          renderSubComponent={() => {
            return (
              <p className="dark:text-gray-200 py-2 px-4 overflow-auto text-sm">
                Error message will be displayed here
              </p>
            );
          }}
        />
      </div>
    </div>
  );
};

export const module = {
  element: <UniqueVulnerabilities />,
};
