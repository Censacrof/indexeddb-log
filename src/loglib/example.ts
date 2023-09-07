import { getPersistentLogBuilder } from "./persistentLogBuilder";

const log = getPersistentLogBuilder().tag("example").build();

log.info("this is an usage example");
