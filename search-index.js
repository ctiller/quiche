var searchIndex={};
searchIndex["quiche"] = {"doc":"🥧 Savoury implementation of the QUIC transport protocol…","i":[[3,"Config","quiche","Stores configuration shared between multiple connections.",null,null],[3,"Connection","","A QUIC connection.",null,null],[3,"Stats","","Statistics about the connection.",null,null],[12,"recv","","The number of QUIC packets received on this connection.",0,null],[12,"sent","","The number of QUIC packets sent on this connection.",0,null],[12,"lost","","The number of QUIC packets that were lost.",0,null],[12,"rtt","","The estimated round-trip time of the connection.",0,null],[12,"cwnd","","The size of the connection's congestion window in bytes.",0,null],[12,"delivery_rate","","The estimated data delivery rate in bytes/s.",0,null],[3,"Header","","A QUIC packet's header.",null,null],[12,"ty","","The type of the packet.",1,null],[12,"version","","The version of the packet.",1,null],[12,"dcid","","The destination connection ID of the packet.",1,null],[12,"scid","","The source connection ID of the packet.",1,null],[12,"token","","The address verification token of the packet. Only present…",1,null],[12,"versions","","The list of versions in the packet. Only present in…",1,null],[3,"StreamIter","","An iterator over QUIC streams.",null,null],[4,"CongestionControlAlgorithm","","Available congestion control algorithms.",null,null],[13,"Reno","","Reno congestion control algorithm (default). `reno` in a…",2,null],[4,"Error","","A QUIC error.",null,null],[13,"Done","","There is no more work to do.",3,null],[13,"BufferTooShort","","The provided buffer is too short.",3,null],[13,"UnknownVersion","","The provided packet cannot be parsed because its version…",3,null],[13,"InvalidFrame","","The provided packet cannot be parsed because it contains…",3,null],[13,"InvalidPacket","","The provided packet cannot be parsed.",3,null],[13,"InvalidState","","The operation cannot be completed because the connection…",3,null],[13,"InvalidStreamState","","The operation cannot be completed because the stream is in…",3,null],[13,"InvalidTransportParam","","The peer's transport params cannot be parsed.",3,null],[13,"CryptoFail","","A cryptographic operation failed.",3,null],[13,"TlsFail","","The TLS handshake failed.",3,null],[13,"FlowControl","","The peer violated the local flow control limits.",3,null],[13,"StreamLimit","","The peer violated the local stream limits.",3,null],[13,"FinalSize","","The received data exceeds the stream's final size.",3,null],[13,"CongestionControl","","Error in congestion control.",3,null],[4,"Shutdown","","The stream's side to shutdown.",null,null],[13,"Read","","Stop receiving stream data.",4,null],[13,"Write","","Stop sending stream data.",4,null],[4,"Type","","QUIC packet type.",null,null],[13,"Initial","","Initial packet.",5,null],[13,"Retry","","Retry packet.",5,null],[13,"Handshake","","Handshake packet.",5,null],[13,"ZeroRTT","","0-RTT packet.",5,null],[13,"VersionNegotiation","","Version negotiation packet.",5,null],[13,"Short","","1-RTT short header packet.",5,null],[5,"accept","","Creates a new server-side connection.",null,[[["option"],["config"]],[["pin",["box"]],["result",["pin"]]]]],[5,"connect","","Creates a new client-side connection.",null,[[["str"],["config"],["option",["str"]]],[["pin",["box"]],["result",["pin"]]]]],[5,"negotiate_version","","Writes a version negotiation packet.",null,[[],[["result",["usize"]],["usize"]]]],[5,"retry","","Writes a stateless retry packet.",null,[[],[["result",["usize"]],["usize"]]]],[5,"version_is_supported","","Returns true if the given protocol version is supported.",null,[[["u32"]],["bool"]]],[0,"h3","","HTTP/3 wire protocol and QPACK implementation.",null,null],[3,"Config","quiche::h3","An HTTP/3 configuration.",null,null],[3,"Header","","A name-value pair representing a raw HTTP header.",null,null],[3,"Connection","","An HTTP/3 connection.",null,null],[4,"Error","","An HTTP/3 error.",null,null],[13,"Done","","There is no error or no work to do",6,null],[13,"BufferTooShort","","The provided buffer is too short.",6,null],[13,"InternalError","","Internal error in the HTTP/3 stack.",6,null],[13,"ExcessiveLoad","","Endpoint detected that the peer is exhibiting behavior…",6,null],[13,"IdError","","Stream ID or Push ID greater that current maximum was used…",6,null],[13,"StreamCreationError","","The endpoint detected that its peer created a stream that…",6,null],[13,"ClosedCriticalStream","","A required critical stream was closed.",6,null],[13,"MissingSettings","","No SETTINGS frame at beginning of control stream.",6,null],[13,"FrameUnexpected","","A frame was received which is not permitted in the current…",6,null],[13,"FrameError","","Frame violated layout or size rules.",6,null],[13,"QpackDecompressionFailed","","QPACK Header block decompression failure.",6,null],[13,"TransportError","","Error originated from the transport layer.",6,null],[13,"StreamBlocked","","The underlying QUIC stream (or connection) doesn't have…",6,null],[4,"Event","","An HTTP/3 connection event.",null,null],[13,"Headers","","Request/response headers were received.",7,null],[12,"list","quiche::h3::Event","The list of received header fields. The application should…",7,null],[12,"has_body","","Whether data will follow the headers on the stream.",7,null],[13,"Data","quiche::h3","Data was received.",7,null],[13,"Finished","","Stream was closed,",7,null],[6,"Result","","A specialized [`Result`] type for quiche HTTP/3 operations.",null,null],[17,"APPLICATION_PROTOCOL","","List of ALPN tokens of supported HTTP/3 versions.",null,null],[11,"new","","Creates a new configuration object with default settings.",8,[[],[["config"],["result",["config"]]]]],[11,"set_max_header_list_size","","Sets the `SETTINGS_MAX_HEADER_LIST_SIZE` setting.",8,[[["self"],["u64"]]]],[11,"set_qpack_max_table_capacity","","Sets the `SETTINGS_QPACK_MAX_TABLE_CAPACITY` setting.",8,[[["self"],["u64"]]]],[11,"set_qpack_blocked_streams","","Sets the `SETTINGS_QPACK_BLOCKED_STREAMS` setting.",8,[[["self"],["u64"]]]],[11,"new","","Creates a new header.",9,[[["str"]],["header"]]],[11,"name","","Returns the header's name.",9,[[["self"]],["str"]]],[11,"value","","Returns the header's value.",9,[[["self"]],["str"]]],[11,"with_transport","","Creates a new HTTP/3 connection using the provided QUIC…",10,[[["config"],["connection"]],[["result",["connection"]],["connection"]]]],[11,"send_request","","Sends an HTTP/3 request.",10,[[["connection"],["self"],["bool"]],[["result",["u64"]],["u64"]]]],[11,"send_response","","Sends an HTTP/3 response on the specified stream.",10,[[["connection"],["self"],["u64"],["bool"]],["result"]]],[11,"send_body","","Sends an HTTP/3 body chunk on the given stream.",10,[[["connection"],["self"],["u64"],["bool"]],[["usize"],["result",["usize"]]]]],[11,"recv_body","","Reads request or response body data into the provided…",10,[[["connection"],["self"],["u64"]],[["usize"],["result",["usize"]]]]],[11,"poll","","Processes HTTP/3 data received from the peer.",10,[[["self"],["connection"]],["result"]]],[11,"from_slice","quiche","Parses a QUIC packet header from the given buffer.",1,[[["usize"]],[["result",["header"]],["header"]]]],[6,"Result","","A specialized [`Result`] type for quiche operations.",null,null],[17,"PROTOCOL_VERSION","","The current QUIC wire version.",null,null],[17,"MAX_CONN_ID_LEN","","The maximum length of a connection ID.",null,null],[17,"MIN_CLIENT_INITIAL_LEN","","The minimum length of Initial packets sent by a client.",null,null],[11,"new","","Creates a config object with the given version.",11,[[["u32"]],[["config"],["result",["config"]]]]],[11,"load_cert_chain_from_pem_file","","Configures the given certificate chain.",11,[[["str"],["self"]],["result"]]],[11,"load_priv_key_from_pem_file","","Configures the given private key.",11,[[["str"],["self"]],["result"]]],[11,"verify_peer","","Configures whether to verify the peer's certificate.",11,[[["self"],["bool"]]]],[11,"grease","","Configures whether to send GREASE values.",11,[[["self"],["bool"]]]],[11,"log_keys","","Enables logging of secrets.",11,[[["self"]]]],[11,"enable_early_data","","Enables sending or receiving early data.",11,[[["self"]]]],[11,"set_application_protos","","Configures the list of supported application protocols.",11,[[["self"]],["result"]]],[11,"set_max_idle_timeout","","Sets the `max_idle_timeout` transport parameter.",11,[[["self"],["u64"]]]],[11,"set_max_packet_size","","Sets the `max_packet_size transport` parameter.",11,[[["self"],["u64"]]]],[11,"set_initial_max_data","","Sets the `initial_max_data` transport parameter.",11,[[["self"],["u64"]]]],[11,"set_initial_max_stream_data_bidi_local","","Sets the `initial_max_stream_data_bidi_local` transport…",11,[[["self"],["u64"]]]],[11,"set_initial_max_stream_data_bidi_remote","","Sets the `initial_max_stream_data_bidi_remote` transport…",11,[[["self"],["u64"]]]],[11,"set_initial_max_stream_data_uni","","Sets the `initial_max_stream_data_uni` transport parameter.",11,[[["self"],["u64"]]]],[11,"set_initial_max_streams_bidi","","Sets the `initial_max_streams_bidi` transport parameter.",11,[[["self"],["u64"]]]],[11,"set_initial_max_streams_uni","","Sets the `initial_max_streams_uni` transport parameter.",11,[[["self"],["u64"]]]],[11,"set_ack_delay_exponent","","Sets the `ack_delay_exponent` transport parameter.",11,[[["self"],["u64"]]]],[11,"set_max_ack_delay","","Sets the `max_ack_delay` transport parameter.",11,[[["self"],["u64"]]]],[11,"set_disable_active_migration","","Sets the `disable_active_migration` transport parameter.",11,[[["self"],["bool"]]]],[11,"set_cc_algorithm_name","","Sets the congestion control algorithm used by string.",11,[[["str"],["self"]],["result"]]],[11,"set_cc_algorithm","","Sets the congestion control algorithm used.",11,[[["self"],["congestioncontrolalgorithm"]]]],[11,"recv","","Processes QUIC packets received from the peer.",12,[[["self"]],[["result",["usize"]],["usize"]]]],[11,"send","","Writes a single QUIC packet to be sent to the peer.",12,[[["self"]],[["result",["usize"]],["usize"]]]],[11,"stream_recv","","Reads contiguous data from a stream into the provided slice.",12,[[["self"],["u64"]],["result"]]],[11,"stream_send","","Writes data to a stream.",12,[[["self"],["u64"],["bool"]],[["result",["usize"]],["usize"]]]],[11,"stream_shutdown","","Shuts down reading or writing from/to the specified stream.",12,[[["shutdown"],["self"],["u64"]],["result"]]],[11,"stream_capacity","","Returns the stream's send capacity in bytes.",12,[[["self"],["u64"]],[["result",["usize"]],["usize"]]]],[11,"stream_finished","","Returns true if all the data has been read from the…",12,[[["self"],["u64"]],["bool"]]],[11,"stream_init_application_data","","Initializes the stream's application data.",12,[[["self"],["u64"],["t"]],["result"]]],[11,"stream_application_data","","Returns the stream's application data, if any was…",12,[[["self"],["u64"]],[["option",["any"]],["any"]]]],[11,"readable","","Returns an iterator over streams that have outstanding…",12,[[["self"]],["streamiter"]]],[11,"writable","","Returns an iterator over streams that can be written to.",12,[[["self"]],["streamiter"]]],[11,"timeout","","Returns the amount of time until the next timeout event.",12,[[["self"]],[["duration"],["option",["duration"]]]]],[11,"on_timeout","","Processes a timeout event.",12,[[["self"]]]],[11,"close","","Closes the connection with the given error and reason.",12,[[["self"],["u64"],["bool"]],["result"]]],[11,"trace_id","","Returns a string uniquely representing the connection.",12,[[["self"]],["str"]]],[11,"application_proto","","Returns the negotiated ALPN protocol.",12,[[["self"]]]],[11,"peer_cert","","Returns the peer's leaf certificate (if any) as a…",12,[[["self"]],[["option",["vec"]],["vec",["u8"]]]]],[11,"is_established","","Returns true if the connection handshake is complete.",12,[[["self"]],["bool"]]],[11,"is_resumed","","Returns true if the connection is resumed.",12,[[["self"]],["bool"]]],[11,"is_in_early_data","","Returns true if the connection has a pending handshake…",12,[[["self"]],["bool"]]],[11,"is_closed","","Returns true if the connection is closed.",12,[[["self"]],["bool"]]],[11,"stats","","Collects and returns statistics about the connection.",12,[[["self"]],["stats"]]],[11,"from","","",11,[[["t"]],["t"]]],[11,"into","","",11,[[],["u"]]],[11,"try_from","","",11,[[["u"]],["result"]]],[11,"try_into","","",11,[[],["result"]]],[11,"borrow","","",11,[[["self"]],["t"]]],[11,"borrow_mut","","",11,[[["self"]],["t"]]],[11,"type_id","","",11,[[["self"]],["typeid"]]],[11,"from","","",12,[[["t"]],["t"]]],[11,"into","","",12,[[],["u"]]],[11,"try_from","","",12,[[["u"]],["result"]]],[11,"try_into","","",12,[[],["result"]]],[11,"borrow","","",12,[[["self"]],["t"]]],[11,"borrow_mut","","",12,[[["self"]],["t"]]],[11,"type_id","","",12,[[["self"]],["typeid"]]],[11,"from","","",0,[[["t"]],["t"]]],[11,"into","","",0,[[],["u"]]],[11,"to_owned","","",0,[[["self"]],["t"]]],[11,"clone_into","","",0,[[["self"],["t"]]]],[11,"try_from","","",0,[[["u"]],["result"]]],[11,"try_into","","",0,[[],["result"]]],[11,"borrow","","",0,[[["self"]],["t"]]],[11,"borrow_mut","","",0,[[["self"]],["t"]]],[11,"type_id","","",0,[[["self"]],["typeid"]]],[11,"from","","",1,[[["t"]],["t"]]],[11,"into","","",1,[[],["u"]]],[11,"to_owned","","",1,[[["self"]],["t"]]],[11,"clone_into","","",1,[[["self"],["t"]]]],[11,"try_from","","",1,[[["u"]],["result"]]],[11,"try_into","","",1,[[],["result"]]],[11,"borrow","","",1,[[["self"]],["t"]]],[11,"borrow_mut","","",1,[[["self"]],["t"]]],[11,"type_id","","",1,[[["self"]],["typeid"]]],[11,"from","","",13,[[["t"]],["t"]]],[11,"into","","",13,[[],["u"]]],[11,"into_iter","","",13,[[],["i"]]],[11,"try_from","","",13,[[["u"]],["result"]]],[11,"try_into","","",13,[[],["result"]]],[11,"borrow","","",13,[[["self"]],["t"]]],[11,"borrow_mut","","",13,[[["self"]],["t"]]],[11,"type_id","","",13,[[["self"]],["typeid"]]],[11,"from","","",2,[[["t"]],["t"]]],[11,"into","","",2,[[],["u"]]],[11,"to_owned","","",2,[[["self"]],["t"]]],[11,"clone_into","","",2,[[["self"],["t"]]]],[11,"try_from","","",2,[[["u"]],["result"]]],[11,"try_into","","",2,[[],["result"]]],[11,"borrow","","",2,[[["self"]],["t"]]],[11,"borrow_mut","","",2,[[["self"]],["t"]]],[11,"type_id","","",2,[[["self"]],["typeid"]]],[11,"from","","",3,[[["t"]],["t"]]],[11,"into","","",3,[[],["u"]]],[11,"to_owned","","",3,[[["self"]],["t"]]],[11,"clone_into","","",3,[[["self"],["t"]]]],[11,"to_string","","",3,[[["self"]],["string"]]],[11,"try_from","","",3,[[["u"]],["result"]]],[11,"try_into","","",3,[[],["result"]]],[11,"borrow","","",3,[[["self"]],["t"]]],[11,"borrow_mut","","",3,[[["self"]],["t"]]],[11,"type_id","","",3,[[["self"]],["typeid"]]],[11,"from","","",4,[[["t"]],["t"]]],[11,"into","","",4,[[],["u"]]],[11,"try_from","","",4,[[["u"]],["result"]]],[11,"try_into","","",4,[[],["result"]]],[11,"borrow","","",4,[[["self"]],["t"]]],[11,"borrow_mut","","",4,[[["self"]],["t"]]],[11,"type_id","","",4,[[["self"]],["typeid"]]],[11,"from","","",5,[[["t"]],["t"]]],[11,"into","","",5,[[],["u"]]],[11,"to_owned","","",5,[[["self"]],["t"]]],[11,"clone_into","","",5,[[["self"],["t"]]]],[11,"try_from","","",5,[[["u"]],["result"]]],[11,"try_into","","",5,[[],["result"]]],[11,"borrow","","",5,[[["self"]],["t"]]],[11,"borrow_mut","","",5,[[["self"]],["t"]]],[11,"type_id","","",5,[[["self"]],["typeid"]]],[11,"from","quiche::h3","",8,[[["t"]],["t"]]],[11,"into","","",8,[[],["u"]]],[11,"try_from","","",8,[[["u"]],["result"]]],[11,"try_into","","",8,[[],["result"]]],[11,"borrow","","",8,[[["self"]],["t"]]],[11,"borrow_mut","","",8,[[["self"]],["t"]]],[11,"type_id","","",8,[[["self"]],["typeid"]]],[11,"from","","",9,[[["t"]],["t"]]],[11,"into","","",9,[[],["u"]]],[11,"to_owned","","",9,[[["self"]],["t"]]],[11,"clone_into","","",9,[[["self"],["t"]]]],[11,"try_from","","",9,[[["u"]],["result"]]],[11,"try_into","","",9,[[],["result"]]],[11,"borrow","","",9,[[["self"]],["t"]]],[11,"borrow_mut","","",9,[[["self"]],["t"]]],[11,"type_id","","",9,[[["self"]],["typeid"]]],[11,"from","","",10,[[["t"]],["t"]]],[11,"into","","",10,[[],["u"]]],[11,"try_from","","",10,[[["u"]],["result"]]],[11,"try_into","","",10,[[],["result"]]],[11,"borrow","","",10,[[["self"]],["t"]]],[11,"borrow_mut","","",10,[[["self"]],["t"]]],[11,"type_id","","",10,[[["self"]],["typeid"]]],[11,"from","","",6,[[["t"]],["t"]]],[11,"into","","",6,[[],["u"]]],[11,"to_owned","","",6,[[["self"]],["t"]]],[11,"clone_into","","",6,[[["self"],["t"]]]],[11,"to_string","","",6,[[["self"]],["string"]]],[11,"try_from","","",6,[[["u"]],["result"]]],[11,"try_into","","",6,[[],["result"]]],[11,"borrow","","",6,[[["self"]],["t"]]],[11,"borrow_mut","","",6,[[["self"]],["t"]]],[11,"type_id","","",6,[[["self"]],["typeid"]]],[11,"from","","",7,[[["t"]],["t"]]],[11,"into","","",7,[[],["u"]]],[11,"to_owned","","",7,[[["self"]],["t"]]],[11,"clone_into","","",7,[[["self"],["t"]]]],[11,"try_from","","",7,[[["u"]],["result"]]],[11,"try_into","","",7,[[],["result"]]],[11,"borrow","","",7,[[["self"]],["t"]]],[11,"borrow_mut","","",7,[[["self"]],["t"]]],[11,"type_id","","",7,[[["self"]],["typeid"]]],[11,"from","","",6,[[["error"]],["self"]]],[11,"len","quiche","",13,[[["self"]],["usize"]]],[11,"next","","",13,[[["self"]],["option"]]],[11,"clone","","",3,[[["self"]],["error"]]],[11,"clone","","",0,[[["self"]],["stats"]]],[11,"clone","","",2,[[["self"]],["algorithm"]]],[11,"clone","quiche::h3","",6,[[["self"]],["error"]]],[11,"clone","","",9,[[["self"]],["header"]]],[11,"clone","","",7,[[["self"]],["event"]]],[11,"clone","quiche","",5,[[["self"]],["type"]]],[11,"clone","","",1,[[["self"]],["header"]]],[11,"default","","",13,[[],["streamiter"]]],[11,"eq","","",3,[[["self"],["error"]],["bool"]]],[11,"eq","","",2,[[["self"],["algorithm"]],["bool"]]],[11,"eq","quiche::h3","",6,[[["error"],["self"]],["bool"]]],[11,"ne","","",6,[[["error"],["self"]],["bool"]]],[11,"eq","","",9,[[["header"],["self"]],["bool"]]],[11,"ne","","",9,[[["header"],["self"]],["bool"]]],[11,"eq","","",7,[[["self"],["event"]],["bool"]]],[11,"ne","","",7,[[["self"],["event"]],["bool"]]],[11,"eq","quiche","",5,[[["self"],["type"]],["bool"]]],[11,"eq","","",1,[[["self"],["header"]],["bool"]]],[11,"ne","","",1,[[["self"],["header"]],["bool"]]],[11,"fmt","","",3,[[["formatter"],["self"]],["result"]]],[11,"fmt","","",0,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",2,[[["formatter"],["self"]],["result"]]],[11,"fmt","quiche::h3","",6,[[["formatter"],["self"]],["result"]]],[11,"fmt","","",9,[[["formatter"],["self"]],["result"]]],[11,"fmt","","",7,[[["formatter"],["self"]],["result"]]],[11,"fmt","quiche","",5,[[["formatter"],["self"]],["result"]]],[11,"fmt","","",1,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",3,[[["self"],["formatter"]],["result"]]],[11,"fmt","quiche::h3","",6,[[["self"],["formatter"]],["result"]]],[11,"from_str","quiche","Converts a string to `CongestionControlAlgorithm`.",2,[[["str"]],["result"]]],[11,"source","","",3,[[["self"]],[["option",["error"]],["error"]]]],[11,"source","quiche::h3","",6,[[["self"]],[["option",["error"]],["error"]]]]],"p":[[3,"Stats"],[3,"Header"],[4,"CongestionControlAlgorithm"],[4,"Error"],[4,"Shutdown"],[4,"Type"],[4,"Error"],[4,"Event"],[3,"Config"],[3,"Header"],[3,"Connection"],[3,"Config"],[3,"Connection"],[3,"StreamIter"]]};
addSearchOptions(searchIndex);initSearch(searchIndex);