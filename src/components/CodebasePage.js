import React from 'react';
import styled from 'styled-components';

const Headline = styled.div`
    font-family: Raleway;
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 28px;
    text-align: left;
    letter-spacing: 0.02em;
    color: var(--dark-text);
    padding-left: 3px;
    margin-top: 14px;
    margin-bottom: 20px;
    @media (max-width: 1024px) {
        padding-left: 12px;
        margin-bottom: 10px;
    }
`;

const Subheadline = styled.div`
    font-family: Raleway;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 28px;
    text-align: left;
    letter-spacing: 0.02em;
    color: var(--dark-text);
    padding-left: 3px;
    margin-top: 60px;
    margin-bottom: 20px;
    @media (max-width: 1024px) {
        padding-left: 12px;
        margin-bottom: 10px;
    }
`;

///////

const ProjectsTable = styled.div`
    margin-top: 10px;
`;

const ProjectsHeading = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: 20px;
    border: 1px solid rgba(51, 51, 51, 0.2);
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    color: #999999;
    font-family: Source Sans Pro;
    font-weight: 600;
`;

const ProjectItem = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: 14px 20px 8px 20px;
    border: 1px solid rgba(51, 51, 51, 0.2);
    color: #333333;
    font-family: Source Sans Pro;
    font-weight: 600;
    border-top: 0px;
    :last-child {
        border-bottom-left-radius: 3px;
        border-bottom-right-radius: 3px;
    }
`;

const ProjectName = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
    padding-right: 5px;
    @media (max-width: 1024px) {
        overflow-wrap: break-word;
        word-wrap: break-word;
    }
`;

const ProjectRepo = styled.div`,
  display: flex;
  flex-direction: column;
  width:30%;
  @media (max-width: 1024px) {
    text-align:center;
  }
`;

const ProjectRepoMobileHidden = styled.span`,
display: flex;
  @media (max-width: 1024px) {
    display:none;
    color: #ff0000;
  }
`;

const ProjectVersion = styled.div`
    display: flex;
    flex-direction: column;
    width: 20%;
    @media (max-width: 1024px) {
        overflow-wrap: break-word;
        word-wrap: break-word;
    }
`;
const ProjectLinks = styled.div`
    display: flex;
    flex-direction: column;
    width: 20%;
    color: #999999;
    @media (max-width: 1024px) {
        overflow-wrap: break-word;
        word-wrap: break-word;
    }
`;

const Icon = styled.img`
    width: 23px;
    height: 23px;
    margin-right: 12px;
    margin-top: 3px;
    :hover {
        -webkit-filter: brightness(90%);
    }
`;

///////

const CodebaseSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media (max-width: 1024px) {
        margin-top: 0px;
    }
`;

const projects = {
    official: [
        {
            name: 'bc-dapp',
            github: 'https://github.com/levelkdev/BC-DAPP',
            ipfs: '',
            version: 'Stable 0.2.1',
            links: '',
        },
        {
            name: 'dxdao-landing-page',
            github: 'https://github.com/fMercury/dxdao-landing-page',
            ipfs: '',
            version: 'Alpha v0.2.0',
            links: '',
        },
        {
            name: 'dxdao-snapshot',
            github: 'https://github.com/AugustoL/dxdao-snapshot',
            ipfs: '',
            version: 'Alpha v0.1.0',
            links: '',
        },
        {
            name: 'dxswap-core',
            github: 'https://github.com/levelkdev/dxswap-core',
            ipfs: '',
            version: 'Beta v1.0.0',
            links:
                'Daotalk <a href="https://daotalk.org/t/uniswap-v2-s-path-to-sustainability-and-the-dxdao-forking-uniswap-v2/1317" target="_blank" rel="noopener noreferrer">#1</a>',
        },
        {
            name: 'dxswap-periphery',
            github: 'https://github.com/levelkdev/dxswap-periphery',
            ipfs: '',
            version: 'Beta v1.0.0',
            links: '',
        },
        {
            name: 'dxswap-dapp',
            github: 'https://github.com/levelkdev/dxswap-dapp',
            ipfs: '',
            version: 'In development',
            links: '',
        },
        {
            name: 'mesa-dapp',
            github: 'https://github.com/dOrgTech/dex-react',
            ipfs: '',
            version: 'Stable v0.11.0-5',
            links: '',
        },
        {
            name: 'omen-dapp',
            github: 'https://github.com/protofire/gnosis-conditional-exchange',
            ipfs: '',
            version: 'In development',
            links: '',
        },
    ],
    community: [
        {
            name: 'voting-dapp-daostack',
            github: 'https://github.com/AugustoL/voting-dapp-daostack',
            ipfs: '',
            version: 'Stable v0.10.5',
            links: '',
        },
    ],
};

const CodebasePage = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="Codebase">
            <Headline>DXdao Codebase</Headline>
            <Subheadline>DXdao Official Projects</Subheadline>
            <CodebaseSection>
                <ProjectsTable>
                    <ProjectsHeading>
                        <ProjectName>Project Name</ProjectName>
                        <ProjectRepo>
                            Repository{' '}
                            <ProjectRepoMobileHidden>
                                / Source Code (IPFS)
                            </ProjectRepoMobileHidden>
                        </ProjectRepo>
                        <ProjectVersion>Version</ProjectVersion>
                        <ProjectLinks>Related Links</ProjectLinks>
                    </ProjectsHeading>
                    {projects.official.map((item, index) => (
                        <ProjectItem key={index}>
                            <ProjectName>{item.name}</ProjectName>
                            <ProjectRepo>
                                {item.github === '' ? (
                                    ''
                                ) : (
                                    <a
                                        href={item.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Icon src="Github.svg"></Icon>
                                    </a>
                                )}
                                {item.ipfs === '' ? (
                                    ''
                                ) : (
                                    <a
                                        href={item.ipfs}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Icon src="IPFS.svg"></Icon>
                                    </a>
                                )}
                            </ProjectRepo>
                            <ProjectVersion>{item.version}</ProjectVersion>
                            <ProjectLinks>
                                <span
                                    dangerouslySetInnerHTML={{
                                        __html: item.links,
                                    }}
                                ></span>
                            </ProjectLinks>
                        </ProjectItem>
                    ))}
                </ProjectsTable>
                <Subheadline>DXdao Community Projects</Subheadline>
                <ProjectsTable>
                    <ProjectsHeading>
                        <ProjectName>Project Name</ProjectName>
                        <ProjectRepo>
                            Repository{' '}
                            <ProjectRepoMobileHidden>
                                / Source Code (IPFS)
                            </ProjectRepoMobileHidden>
                        </ProjectRepo>
                        <ProjectVersion>Version</ProjectVersion>
                        <ProjectLinks>Related Links</ProjectLinks>
                    </ProjectsHeading>
                    {projects.community.map((item, index) => (
                        <ProjectItem key={index}>
                            <ProjectName>{item.name}</ProjectName>
                            <ProjectRepo>
                                {item.github === '' ? (
                                    ''
                                ) : (
                                    <a
                                        href={item.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Icon src="Github.svg"></Icon>
                                    </a>
                                )}
                                {item.ipfs === '' ? (
                                    ''
                                ) : (
                                    <a
                                        href={item.ipfs}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Icon src="IPFS.svg"></Icon>
                                    </a>
                                )}
                            </ProjectRepo>
                            <ProjectVersion>{item.version}</ProjectVersion>
                            <ProjectLinks>
                                <span
                                    dangerouslySetInnerHTML={{
                                        __html: item.links,
                                    }}
                                ></span>
                            </ProjectLinks>
                        </ProjectItem>
                    ))}
                </ProjectsTable>
            </CodebaseSection>
        </section>
    );
};
export default CodebasePage;
