import { Heading } from '@chakra-ui/react';
import React from 'react';
import styled from 'styled-components';
import ClickableLogo from './ClickableLogo';

export default function HomePlugins() {
  return (
    <Container>
      <Heading>Supported plugins</Heading>
      <LogoContainer>
        <LogoRow>
          <ClickableLogo
            href="https://github.com/rookie-ninja/rk-grpc"
            src="/images/grpc.svg"
            alt="gRpc"
          />
          <ClickableLogo
            href="https://github.com/rookie-ninja/rk-gin"
            src="/images/gin.svg"
            alt="Gin"
          />
          <ClickableLogo
            href="https://github.com/rookie-ninja/rk-echo"
            src="/images/echo.svg"
            alt="Echo"
          />
          <ClickableLogo
            href="https://github.com/rookie-ninja/rk-gf"
            src="/images/goframe.svg"
            alt="GoFrame"
          />
          <ClickableLogo
            href="https://github.com/rookie-ninja/rk-fiber"
            src="/images/fiber.svg"
            alt="Fiber"
          />
          <ClickableLogo
            href="https://github.com/rookie-ninja/rk-zero"
            src="/images/go-zero.svg"
            alt="Zero"
          />
          <ClickableLogo
            href="https://github.com/rookie-ninja/rk-mux"
            src="/images/mux.svg"
            alt="Mux"
          />
        </LogoRow>
        <LogoRow>
          <ClickableLogo
            href="https://github.com/rookie-ninja/rk-db/tree/master/mysql"
            src="/images/mysql.svg"
            alt="MySql"
          />
          <ClickableLogo
            href="https://github.com/rookie-ninja/rk-db/tree/master/sqlite"
            src="/images/sqlite.svg"
            alt="SQLite"
          />
          <ClickableLogo
            href="https://github.com/rookie-ninja/rk-db/tree/master/sqlserver"
            src="/images/sqlserver.svg"
            alt="SQL Server"
          />
          <ClickableLogo
            href="https://github.com/rookie-ninja/rk-db/tree/master/postgres"
            src="/images/postgresql.svg"
            alt="PostgreSQL"
          />
          <ClickableLogo
            href="https://github.com/rookie-ninja/rk-db/tree/master/clickhouse"
            src="/images/clickhouse.svg"
            alt="ClickHouse"
          />
          <ClickableLogo
            href="https://github.com/rookie-ninja/rk-db/tree/master/mongodb"
            src="/images/mongodb.svg"
            alt="MongoDB"
          />
          <ClickableLogo
            href="https://github.com/rookie-ninja/rk-db/tree/master/redis"
            src="/images/redis.svg"
            alt="Redis"
          />
        </LogoRow>
        <LogoRow>
          <ClickableLogo
            href="https://github.com/rookie-ninja/rk-cloud/tree/master/aws"
            src="/images/aws.svg"
            alt="AWS"
          />
          <ClickableLogo
            href="https://github.com/rookie-ninja/rk-cloud/tree/master/tencent"
            src="/images/tencentcloud.svg"
            alt="Tencent Cloud"
          />
        </LogoRow>
        <LogoRow>
          <ClickableLogo
            href="https://github.com/rookie-ninja/rk-entry"
            src="/images/viper.svg"
            alt="Viper"
          />
          <ClickableLogo
            href="https://github.com/rookie-ninja/rk-entry"
            src="/images/zap.svg"
            alt="Zap"
          />
          <ClickableLogo
            href="https://github.com/rookie-ninja/rk-entry"
            src="/images/tls.svg"
            alt="TLS"
          />
        </LogoRow>
      </LogoContainer>
    </Container>
  );
}

const Container = styled.div`
  background-color: #f6f9fc;
  padding: 2rem;
  display: grid;
  width: 100vw;
  text-align: center;
  justify-items: center;
`;

const LogoContainer = styled.div`
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 1fr);
  gap: 1rem;
  max-width: 1200px;
`;

const LogoRow = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 1rem;
`;
